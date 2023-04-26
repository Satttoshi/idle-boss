import styled, { keyframes, css } from "styled-components";
import MoneyButton from "./MoneyButton";
import Milestones from "./Milestones";
import useStore, { milestones } from "~/src/zustand/store";
import ChevronAnimation from "./ChevronAnimation";
import InvestButton from "./InvestButton";
import TierLocked from "./TierLocked";
import NavigationButton from "./NavigationButton";

export default function TutorialModal() {
  const currentTutorial = useStore((state) => state.currentTutorial);
  const exitTutorial = useStore((state) => state.exitTutorial);
  const money = useStore((state) => state.money);
  const getTierById = useStore((state) => state.getTierById);
  const clickTimer = useStore((state) => state.clickTimer);
  const invest = useStore((state) => state.invest);

  function tierSelector(currentTutorial) {
    switch (currentTutorial) {
      case 0:
      case 1:
        return "tier1";
      case 2:
        return "tier2";
      default:
        return "tier1";
    }
  }

  const currentTier = getTierById(tierSelector(currentTutorial));
  const { investCount, milestoneIndex, id, investPrice } = currentTier;

  function handleMoneyButtonClick() {
    clickTimer(currentTier.id);
    exitTutorial();
  }

  if (currentTutorial === 0) {
    return (
      <StyledDimmer>
        <StyledArticleBox variant={{ top: "250px", heigth: "120px" }}>
          <ChevronAnimation
            variant={{ top: "-50px", left: "53px", rotation: "-30deg" }}
          />
          <p>To begin earning money, tap on the Wordpress button.</p>
        </StyledArticleBox>
        <StyledMoneyButtonContainer>
          <MoneyButton
            onMoneyButtonClick={handleMoneyButtonClick}
            tier={currentTier}
          />
          <Milestones
            investCount={investCount}
            currentMilestone={milestones[milestoneIndex]}
            tier={currentTier}
          />
          <PulseAnimation
            boxSize={{ width: "80px", heigth: "80px" }}
            borderRadius={"50%"}
            top={"4px"}
            left={"0px"}
          />
        </StyledMoneyButtonContainer>
      </StyledDimmer>
    );
  }

  function handleInvestButtonClick() {
    try {
      invest(id);
    } catch (error) {
      console.error(error.message);
    }
    exitTutorial();
  }

  if (currentTutorial === 1 && money >= 50) {
    return (
      <StyledDimmer>
        <StyledArticleBox variant={{ top: "250px", heigth: "120px" }}>
          <ChevronAnimation
            variant={{ top: "-60px", left: "210px", rotation: "20deg" }}
          />
          <p>Invest in your product to increase profitability!</p>
        </StyledArticleBox>
        <StyledInvestButtonContainer>
          <InvestButton
            onInvest={handleInvestButtonClick}
            money={money}
            investPrice={investPrice}
          />
          <PulseAnimation
            boxSize={{ width: "150px", heigth: "28px" }}
            borderRadius={"20px"}
            top={"0px"}
            left={"-5px"}
          />
        </StyledInvestButtonContainer>
      </StyledDimmer>
    );
  }

  if (currentTutorial === 2 && money >= 600) {
    return (
      <StyledDimmer>
        <StyledArticleBox variant={{ top: "370px", heigth: "120px" }}>
          <ChevronAnimation
            variant={{ top: "-60px", left: "139px", rotation: "0deg" }}
          />
          <p>Expand your product line by unlocking the next item!</p>
        </StyledArticleBox>
        <StyledUnlockButtonContainer>
          <TierLocked currentTier={currentTier} />
          <PulseAnimation
            boxSize={{ width: "307px", heigth: "94px" }}
            borderRadius={"40px"}
            top={"0px"}
            left={"0"}
          />
        </StyledUnlockButtonContainer>
      </StyledDimmer>
    );
  }

  if (currentTutorial === 3 && money >= 3000) {
    return (
      <StyledDimmer>
        <StyledArticleBoxBottom variant={{ bottom: "120px", heigth: "150px" }}>
          <ChevronAnimation
            variant={{ top: "210px", left: "285px", rotation: "150deg" }}
          />
          <p>It is time to go upstairs!</p>
        </StyledArticleBoxBottom>
        <StyledNavigationButtonContainer>
          <NavigationButton variant={2} />
          <PulseAnimation
            boxSize={{ width: "84px", heigth: "30px" }}
            borderRadius={"5px"}
            bot={"0"}
            left={"0"}
          />
        </StyledNavigationButtonContainer>
      </StyledDimmer>
    );
  }

  return null;
}

function PulseAnimation({ boxSize, top, bot, left, borderRadius }) {
  if (!bot) {
    return (
      <>
        <PulseBox
          variant={0}
          boxSize={boxSize}
          top={top}
          left={left}
          borderRadius={borderRadius}
        />
        <PulseBox
          variant={1}
          boxSize={boxSize}
          top={top}
          left={left}
          borderRadius={borderRadius}
        />
      </>
    );
  } else {
    return (
      <>
        <PulseBoxBottom
          variant={0}
          boxSize={boxSize}
          bot={bot}
          left={left}
          borderRadius={borderRadius}
        />
        <PulseBoxBottom
          variant={1}
          boxSize={boxSize}
          bot={bot}
          left={left}
          borderRadius={borderRadius}
        />
      </>
    );
  }
}

const StyledArticleBoxBottom = styled.article`
  position: absolute;
  bottom: ${({ variant }) => variant.bottom};
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: ${({ variant }) => variant.heigth};
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

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

const StyledArticleBox = styled.article`
  position: absolute;
  top: ${({ variant }) => variant.top};
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: ${({ variant }) => variant.heigth};
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

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ boxSize }) => boxSize.width};
  height: ${({ boxSize }) => boxSize.heigth};
  background-color: var(--3);
  border-radius: ${({ borderRadius }) => borderRadius};

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

const PulseBoxBottom = styled.div`
  position: absolute;
  bottom: ${({ bot }) => bot};
  left: ${({ left }) => left};
  width: ${({ boxSize }) => boxSize.width};
  height: ${({ boxSize }) => boxSize.heigth};
  background-color: var(--3);
  border-radius: ${({ borderRadius }) => borderRadius};

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

const StyledMoneyButtonContainer = styled.div`
  height: 94px;
  width: 307px;
  margin: 15px;
  min-width: 307px;
  flex-shrink: 0;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-54.8%);
`;

const StyledInvestButtonContainer = styled.div`
  height: 28px;
  width: 150px;
  min-width: 150px;
  flex-shrink: 0;
  position: absolute;
  top: 161px;
  left: 50%;
  transform: translateX(2.5%);
`;

const StyledUnlockButtonContainer = styled.div`
  min-width: 150px;
  flex-shrink: 0;
  position: absolute;
  top: 219px;
  left: 50%;
  transform: translateX(-102%);
`;

const StyledNavigationButtonContainer = styled.div`
  min-width: 84px;
  flex-shrink: 0;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(97.5%);
`;
