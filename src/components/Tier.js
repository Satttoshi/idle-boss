import MoneyButton from "./MoneyButton";
import ProgressBar from "./ProgressBar";
import useStore, { milestones } from "~/src/zustand/store";
import { useState } from "react";
import InvestButton from "./InvestButton";
import Milestones from "./Milestones";
import styled from "styled-components";

export default function Tier({ currentTier }) {
  const { setMoney, money, invest } = useStore();

  const [isFilling, setIsFilling] = useState(false);

  function handleTimerStart() {
    setIsFilling(true);
  }

  function handleTimerEnd() {
    setIsFilling(false);
    setMoney(currentTier.income);
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
          tier={currentTier}
          isFilling={isFilling}
          onTimerStart={handleTimerStart}
          onTimerEnd={handleTimerEnd}
        />
        <ProgressBar isFilling={isFilling} tier={currentTier} />
      </StyledContainer>
      <StyledContainer>
        <Milestones
          investCount={investCount}
          currentMilestone={milestones[milestoneIndex]}
        />
        <InvestButton
          onInvest={handleInvest}
          money={money}
          investPrice={investPrice}
        />
      </StyledContainer>
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
`;
