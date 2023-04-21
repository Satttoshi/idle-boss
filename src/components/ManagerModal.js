import styled, { keyframes } from "styled-components";
import Manager from "~/src/assets/manager.svg";
import Logo from "./TierLogo";
import formatNumbers from "~/src/utils/format-numbers";
import ManagerButton from "./ManagerButton";
import useStore from "~/src/zustand/store";
import ChevronLeft from "~/src/assets/chevron-left.svg";
import ChevronRight from "~/src/assets/chevron-right.svg";

export default function ManagerModal({ userName, oManagerModalClose }) {
  const { getTierById } = useStore();
  const selectedManager = useStore((state) => state.selectedManager);
  const setSelectedManager = useStore((state) => state.setSelectedManager);
  const tiers = useStore((state) => state.tiers);

  const currentTier = getTierById(`tier${selectedManager}`);
  const price = currentTier.unlockPrice * 300;
  const displayPrice = formatNumbers(price);

  const unlockedTiers = tiers.filter((tier) => tier.isUnlocked);

  console.log(unlockedTiers);

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

  return (
    <StyledDimmer onClick={oManagerModalClose}>
      <StyledModal>
        <StyledLogoContainer>
          <Logo tierId={currentTier.id} forModal={true} />
        </StyledLogoContainer>
        <StyledManagerName>Herbert Penguin</StyledManagerName>
        <StyledManager width="64" height="64" fill="var(--3)" />
        <StyledApplication>
          <StyledArticle>
            <h4>Dear {userName}</h4>
            <p>
              I am a skilled Wordpress Creator Manager with experience in
              website development, optimization, and customer service. I believe
              my expertise and passion for Wordpress make me a great fit for
              your team. Thank you for considering my application.
            </p>
            <span>Sincerely, Herbert</span>
          </StyledArticle>
        </StyledApplication>
        <StyledPrice>Price: {displayPrice + " €"}</StyledPrice>
        <ManagerButton tier={currentTier} />
        <StyledPrevButton type="button" onClick={handlePrevManager}>
          <ChevronLeft width="40" heigth="40" fill="var(--1)" />
        </StyledPrevButton>
        <StyledNextButton type="button" onClick={handleNextManager}>
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
  bottom: 31px;
  right: 31px;
  z-index: 300;
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
  bottom: 31px;
  left: 31px;
  z-index: 300;
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
  bottom: 99px;
  text-align: center;
  margin: 0;

  font-family: var(--font1);
  font-weight: 600;
  font-size: 1.1rem;
`;

const StyledManagerName = styled.h3`
  position: absolute;
  top: 48px;
  right: 14px;

  width: 200px;
  font-size: 1.2rem;
  font-family: var(--font1);
  font-weight: 600;
  margin: 0;
  color: var(--1);
  text-align: center;
`;

const StyledArticle = styled.article`
  padding: 22px;
  font-weight: 400;
  font-size: 0.8rem;

  h4 {
    margin: 0;
    font-weight: 400;
  }
`;

const StyledLogoContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`;

const StyledManager = styled(Manager)`
  position: absolute;
  top: 96px;
  right: 34px;
  z-index: 2;
`;

const StyledApplication = styled.div`
  position: absolute;
  top: 122px;
  left: 50%;
  transform: translateX(-50%);

  width: 290px;
  height: 216px;
  background-color: var(--4);
  border-radius: 15px;

  font-family: var(--font1);

  display: grid;
  place-items: center;
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
