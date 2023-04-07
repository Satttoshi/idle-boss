import MoneyButton from "./MoneyButton";
import ProgressBar from "./ProgressBar";
import useStore, { milestones } from "~/src/zustand/store";
import InvestButton from "./InvestButton";
import Milestones from "./Milestones";
import styled from "styled-components";

export default function Tier({ currentTier }) {
  const { money, clickTimer, invest } = useStore();

  function handleMoneyButtonClick() {
    clickTimer(currentTier.id);
  }

  function handleInvest() {
    try {
      invest(currentTier.id);
    } catch (error) {
      // mby implement not enough money popup in a later US
      console.error(error.message);
    }
  }

  const { investCount, investPrice, milestoneIndex } = currentTier;

  return (
    <>
      <StyledHeader>{currentTier.name}</StyledHeader>
      <StyledContainer>
        <MoneyButton
          onMoneyButtonClick={handleMoneyButtonClick}
          isFilling={currentTier.isFilling}
        />
        <ProgressBar isFilling={currentTier.isFilling} tier={currentTier} />
      </StyledContainer>

      <Milestones
        investCount={investCount}
        currentMilestone={milestones[milestoneIndex]}
      />
      <InvestButton
        onInvest={handleInvest}
        money={money}
        investPrice={investPrice}
      />
    </>
  );
}

const StyledHeader = styled.h2`
  margin: 30px 0 0 0;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  border: 1px solid black;
`;
