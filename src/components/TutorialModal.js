import styled, { keyframes, css } from "styled-components";
import MoneyButton from "./MoneyButton";
import Milestones from "./Milestones";
import useStore, { milestones } from "~/src/zustand/store";
import ChevronAnimation from "./ChevronAnimation";
import InvestButton from "./InvestButton";
import TierLocked from "./TierLocked";
import NavigationButton from "./NavigationButton";
import BossFloorButton from "./BossFloorButton";
import Chevron from "~/src/assets/chevron-right.svg";

export default function TutorialModal() {
  const currentTutorial = useStore((state) => state.currentTutorial);
  const exitTutorial = useStore((state) => state.exitTutorial);
  const money = useStore((state) => state.money);
  const getTierById = useStore((state) => state.getTierById);
  const clickTimer = useStore((state) => state.clickTimer);
  const invest = useStore((state) => state.invest);

  const availableFloors = useStore((state) => state.availableFloors);
  const currentFloor = useStore((state) => state.currentFloor);
  const currentLastFloor = availableFloors.length;

  const setManagerModal = useStore((state) => state.setManagerModal);

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

  function handleNextClick() {
    exitTutorial();
  }

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
          <p>It is time to go upstairs to your office!</p>
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

  if (currentTutorial === 4 && currentLastFloor === currentFloor) {
    return (
      <StyledDimmer>
        <StyledArticleBox variant={{ top: "100px", heigth: "270px" }}>
          <p>
            Welcome to your executive office, which is also referred to as the
            boss floor. Bossy things can be done here.
          </p>
          <StyledNextButton type="button" onClick={handleNextClick}>
            next
            <StyledChevron />
          </StyledNextButton>
        </StyledArticleBox>
        <StyledBossButtonContainer></StyledBossButtonContainer>
      </StyledDimmer>
    );
  }

  function handleJobApplicationClick() {
    setManagerModal(true);
    exitTutorial();
  }

  if (currentTutorial === 5 && currentLastFloor === currentFloor) {
    return (
      <StyledDimmer>
        <StyledArticleBox variant={{ top: "330px", heigth: "120px" }}>
          <ChevronAnimation
            variant={{ top: "-60px", left: "140px", rotation: "0deg" }}
          />
          <p>You seem to have received a job application!</p>
        </StyledArticleBox>
        <StyledBossButtonContainer>
          <BossFloorButton
            label={"Job Applications"}
            onClick={handleJobApplicationClick}
          />
          <PulseAnimation
            boxSize={{ width: "215px", heigth: "40px" }}
            borderRadius={"10px"}
            top={"10px"}
            left={"80px"}
          />
        </StyledBossButtonContainer>
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

const NextAnimation = keyframes`
  0% {
    transform: translateX(0px);
    }
  100% {
    transform: translateX(3px);
    }
`;

const StyledChevron = styled(Chevron)`
  width: 20px;
  height: 20px;

  animation: ${NextAnimation} 0.5s ease-out infinite alternate;
`;

const StyledNextButton = styled.button`
  appearance: none;
  border: 2px solid var(--1);
  cursor: pointer;
  bottom: 10px;
  width: 75px;
  height: 30px;
  border-radius: 25px;
  z-index: 10;
  background-color: transparent;
  margin-bottom: 20px;
  fill: var(--1);

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font1);
  font-size: 1rem;
  font-weight: 500;
  color: var(--1);
  line-height: 1px;

  @media (hover: hover) {
    &:hover:enabled {
      background-color: var(--3);
      color: var(--6);
      fill: var(--6);
      border: 2px solid var(--3);
    }
  }

  @media (hover: none) {
    &:active:enabled {
      background-color: var(--3);
      color: var(--6);
      fill: var(--6);
      border: 2px solid var(--3);
    }
  }
`;

const StyledArticleBoxBottom = styled.article`
  position: absolute;
  bottom: ${({ variant }) => variant.bottom};
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: ${({ variant }) => variant.heigth};
  background-color: rgba(0, 0, 0, 0.9);
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
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

const StyledBossButtonContainer = styled.div`
  min-width: 215px;
  flex-shrink: 0;
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translateX(-50%);
`;
