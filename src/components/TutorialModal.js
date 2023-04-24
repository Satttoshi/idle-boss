import styled, { keyframes, css } from "styled-components";
import MoneyButton from "./MoneyButton";
import Milestones from "./Milestones";
import useStore, { milestones } from "~/src/zustand/store";
import ChevronAnimation from "./ChevronAnimation";

export default function TutorialModal() {
  const { getTierById, clickTimer } = useStore();
  const currentTutorial = useStore((state) => state.currentTutorial);
  const exitTutorial = useStore((state) => state.exitTutorial);
  const currentTier = getTierById("tier1");
  const { investCount, milestoneIndex } = currentTier;

  function handleMoneyButtonClick() {
    clickTimer(currentTier.id);
    exitTutorial();
  }
  if (currentTutorial === 0) {
    return (
      <StyledDimmer>
        <StyledArticleBox>
          <ChevronAnimation />
          <p>To begin earning money, tap on the Wordpress button.</p>
        </StyledArticleBox>
        <StyledButtonContainer>
          <MoneyButton
            onMoneyButtonClick={handleMoneyButtonClick}
            tier={currentTier}
          />
          <Milestones
            investCount={investCount}
            currentMilestone={milestones[milestoneIndex]}
            tier={currentTier}
          />
          <PulseAnimation />
        </StyledButtonContainer>
      </StyledDimmer>
    );
  }

  return null;
}

function PulseAnimation() {
  return (
    <>
      <PulseBox variant={0} />
      <PulseBox variant={1} />
    </>
  );
}

const StyledArticleBox = styled.article`
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;

  display: grid;
  place-items: center;

  p {
    margin: 0;
    padding: 25px;
    font-family: var(--font1);
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    line-height: 1.4;
  }
`;

const pulse1 = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.3;
    }
75% {
    transform: scale(1.6);
    opacity: 0;
    };
100% {
    transform: scale(1.6);
    opacity: 0;
    };
`;

const pulse2 = keyframes`
  25% {
    transform: scale(1);
    opacity: 0.3;
    }
  25% {
    transform: scale(1);
    opacity: 0.3;
    }
100% {
    transform: scale(1.6);
    opacity: 0;
    };
`;

const PulseBox = styled.div`
  position: absolute;
  top: 4px;
  left: 0;
  width: 80px;
  height: 80px;
  background-color: var(--3);
  border-radius: 50%;
  z-index: 0;

  animation: ${({ variant }) =>
      variant === 0
        ? css`
            ${pulse1}
          `
        : css`
            ${pulse2}
          `}
    2s ease-in-out infinite;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    }
  100% {
    opacity: 1;
    }
      `;

const StyledDimmer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;

  animation: ${fadeIn} 0.5s ease-in-out;
`;

const StyledButtonContainer = styled.section`
  height: 94px;
  width: 307px;
  margin: 15px;
  min-width: 307px;
  flex-shrink: 0;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-55%);
`;
