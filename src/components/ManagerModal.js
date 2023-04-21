import styled, { keyframes } from "styled-components";
import Manager from "~/src/assets/manager.svg";
import Logo from "./TierLogo";
import formatNumbers from "~/src/utils/format-numbers";
import ManagerButton from "./ManagerButton";
import useStore from "~/src/zustand/store";
import ChevronLeft from "~/src/assets/chevron-left.svg";
import ChevronRight from "~/src/assets/chevron-right.svg";
import Application from "./Application";

export default function ManagerModal({ userName, oManagerModalClose }) {
  const getTierById = useStore((state) => state.getTierById);
  const selectedManager = useStore((state) => state.selectedManager);
  const setSelectedManager = useStore((state) => state.setSelectedManager);
  const tiers = useStore((state) => state.tiers);

  const currentTier = getTierById(`tier${selectedManager}`);
  const price = currentTier.unlockPrice * 300;
  const displayPrice = formatNumbers(price);

  const unlockedTiers = tiers.filter((tier) => tier.isUnlocked);

  function handleNextManager(event) {
    event.stopPropagation();
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

  function handlePrevManager(event) {
    event.stopPropagation();
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

  return (
    <StyledDimmer onClick={oManagerModalClose}>
      <StyledModal>
        <StyledLogoContainer>
          <Logo tierId={currentTier.id} forModal={false} />
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
      </StyledModal>
    </StyledDimmer>
  );
}

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

  &:disabled {
    opacity: 0.3;
    cursor: default;
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

  &:disabled {
    opacity: 0.4;
    cursor: default;
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
`;
