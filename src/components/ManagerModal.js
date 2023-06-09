import styled, { keyframes, css } from "styled-components";
import Manager from "~/src/assets/manager.svg";
import Logo from "./TierLogo";
import formatNumbers from "~/src/utils/format-numbers";
import ManagerButton from "./ManagerButton";
import useStore from "~/src/zustand/store";
import ChevronLeft from "~/src/assets/chevron-left-box.svg";
import ChevronRight from "~/src/assets/chevron-right-box.svg";
import Application from "./Application";
import MoneyButtonAnimation from "./MoneyButtonAnimation";

export default function ManagerModal({ userName }) {
  const getTierById = useStore((state) => state.getTierById);
  const selectedManager = useStore((state) => state.selectedManager);
  const setSelectedManager = useStore((state) => state.setSelectedManager);
  const tiers = useStore((state) => state.tiers);
  const setManagerModal = useStore((state) => state.setManagerModal);

  const currentTier = getTierById(`tier${selectedManager}`);
  const price = currentTier.unlockPrice * 300;
  const displayPrice = formatNumbers(price);

  const unlockedTiers = tiers.filter((tier) => tier.isUnlocked);

  function handleNextManager() {
    if (selectedManager === unlockedTiers[unlockedTiers.length - 1].index) {
      setSelectedManager(1);
    } else {
      setSelectedManager(
        unlockedTiers[
          unlockedTiers.findIndex((tier) => tier.index === selectedManager) + 1
        ].index
      );
    }
  }

  function handlePrevManager() {
    if (selectedManager === 1) {
      setSelectedManager(unlockedTiers[unlockedTiers.length - 1].index);
    } else {
      setSelectedManager(
        unlockedTiers[
          unlockedTiers.findIndex((tier) => tier.index === selectedManager) - 1
        ].index
      );
    }
  }

  function resolvePrevButtonAvailability() {
    if (selectedManager === 1) {
      return true;
    } else {
      return false;
    }
  }

  function resolveNextButtonAvailability() {
    if (selectedManager === unlockedTiers[unlockedTiers.length - 1].index) {
      return true;
    }
    return false;
  }

  function handleManagerModalClose() {
    setManagerModal(false);
  }

  function preventClosing(event) {
    event.stopPropagation();
  }

  return (
    <StyledDimmer onClick={handleManagerModalClose}>
      <StyledModal onClick={preventClosing}>
        <StyledLogoContainer>
          <Logo tierId={currentTier.id} />
          {currentTier.hasManager && <MoneyButtonAnimation forModal={true} />}
        </StyledLogoContainer>
        <StyledManager width="64" height="64" fill="var(--3)" />
        <Application userName={userName} selectedManager={selectedManager} />
        <StyledPrice>Price: {displayPrice + " €"}</StyledPrice>
        <ManagerButton tier={currentTier} />
        <StyledPrevButton
          disabled={resolvePrevButtonAvailability()}
          type="button"
          onClick={handlePrevManager}
        >
          <ChevronLeft width="40" heigth="40" fill="var(--1)" />
        </StyledPrevButton>
        <StyledNextButton
          disabled={resolveNextButtonAvailability()}
          type="button"
          onClick={handleNextManager}
        >
          <ChevronRight width="40" heigth="40" fill="var(--1)" />
        </StyledNextButton>
        <StyledCloseButton type="button" onClick={handleManagerModalClose}>
          close
        </StyledCloseButton>
        {currentTier.hasManager && (
          <StyledApprovalBox isStamped={currentTier.isStamped}>
            <span>HIRED !</span>
          </StyledApprovalBox>
        )}
      </StyledModal>
    </StyledDimmer>
  );
}

const StampAnimation = keyframes`
from {
  scale: 5;
  transform: translatex(0%);
  opacity: 0;
}
to {
  scale: 1;
  transform: translatex(-50%);
  opacity: 1;
}`;

const StyledApprovalBox = styled.div`
  position: absolute;
  width: 280px;
  height: 150px;
  top: 165px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  place-items: center;
  color: var(--3);
  font-family: var(--font2);
  font-weight: 600;
  font-size: 4rem;
  background: rgba(0, 0, 0, 0.3);
  border: 10px solid var(--3);
  border-radius: 15px;
  rotate: 12deg;

  animation-name: ${({ isStamped }) =>
    isStamped
      ? "none"
      : css`
          ${StampAnimation}
        `};
  animation-duration: 200ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;

  span {
    text-shadow: -3px -3px 0 var(--6), 3px -3px 0 var(--6), -3px 3px 0 var(--6),
      3px 3px 0 var(--6);
  }
`;

const StyledCloseButton = styled.button`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  appearance: none;
  border: 2px solid var(--1);
  border-radius: 10px;
  cursor: pointer;
  width: 200px;
  height: 28px;

  font-family: var(--font1);
  font-weight: 600;
  font-size: 1rem;
  color: var(--1);
  line-height: 1px;

  box-shadow: var(--shadow1);

  @media (hover: hover) {
    &:hover:enabled {
      border-color: var(--3);
      color: var(--3);
    }
  }

  @media (hover: none) {
    &:active:enabled {
      border-color: var(--3);
      color: var(--3);
    }
  }
`;

const StyledNextButton = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 0;
  background: none;
  position: absolute;
  bottom: 65px;
  right: 31px;

  border-radius: 10px;
  box-shadow: var(--shadow2);

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  @media (hover: hover) {
    &:hover:enabled {
      svg {
        fill: var(--3);
      }
    }
  }

  @media (hover: none) {
    &:active:enabled {
      svg {
        fill: var(--3);
      }
    }
  }
`;

const StyledPrevButton = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 0;
  background: none;
  position: absolute;
  bottom: 65px;
  left: 31px;
  z-index: 300;
  border-radius: 10px;
  box-shadow: var(--shadow2);

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  @media (hover: hover) {
    &:hover:enabled {
      svg {
        fill: var(--3);
      }
    }
  }

  @media (hover: none) {
    &:active:enabled {
      svg {
        fill: var(--3);
      }
    }
  }
`;

const ModalPopupAnimation = keyframes`
  from {
    top: 2000px;
  }
  
  to {
    top: 100px;
  }`;

const StyledPrice = styled.h5`
  width: 100%;
  position: absolute;
  bottom: 123px;
  text-align: center;
  margin: 0;

  font-family: var(--font1);
  font-weight: 600;
  font-size: 1.1rem;
`;

const StyledLogoContainer = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--1);
  top: 18px;
  left: 30px;
  display: grid;
  place-items: center;
`;

const StyledManager = styled(Manager)`
  position: absolute;
  top: 77px;
  right: 34px;
  z-index: 2;
`;

const StyledModal = styled.div`
  position: relative;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);

  width: 317px;
  height: 480px;
  background-color: var(--5);
  border-radius: 25px;

  animation-name: ${ModalPopupAnimation};
  animation-duration: 0.35s;
  animation-timing-function: ease-out;
`;

const StyledDimmer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
