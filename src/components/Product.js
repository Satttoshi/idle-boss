import MoneyButton from "./MoneyButton";
import ProgressBar from "./ProgressBar";
import useStore, { milestones } from "~/src/zustand/store";
import { useState } from "react";
import InvestButton from "./InvestButton";
import Milestones from "./Milestones";

export default function Product({ tierId }) {
  const { setMoney, tiers, money, invest } = useStore();

  const [isFilling, setIsFilling] = useState(false);

  // replace tier1 with variable tierId
  const currentTier = tiers.find((tier) => tier.id === tierId);

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
      <MoneyButton
        tier={currentTier}
        isFilling={isFilling}
        onTimerStart={handleTimerStart}
        onTimerEnd={handleTimerEnd}
      />
      <ProgressBar isFilling={isFilling} tier={currentTier} />
      <InvestButton
        onInvest={handleInvest}
        money={money}
        investPrice={investPrice}
      />
      <Milestones
        investCount={investCount}
        currentMilestone={milestones[milestoneIndex]}
      />
    </>
  );
}
