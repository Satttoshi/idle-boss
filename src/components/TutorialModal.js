import styled, { keyframes, css } from "styled-components";
import MoneyButton from "./MoneyButton";
import Milestones from "./Milestones";
import useStore, { milestones } from "~/src/zustand/store";

export default function TutorialModal() {
  const { getTierById, clickTimer } = useStore();
  const currentTier = getTierById("tier1");
  const { investCount, milestoneIndex } = currentTier;

  function handleMoneyButtonClick() {
    clickTimer(currentTier.id);
  }
  return (
    <StyledDimmer>
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

function PulseAnimation() {
  return (
    <>
      <PulseBox variant={0} />
      <PulseBox variant={1} />
    </>
  );
}

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

const StyledDimmer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 200;
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
