import MoneyButton from "./MoneyButton";
import ProgressBar from "./ProgressBar";
import useStore, { milestones } from "~/src/zustand/store";
import InvestButton from "./InvestButton";
import Milestones from "./Milestones";

export default function Tier({ currentTier }) {
  const money = useStore((state) => state.money);
  const invest = useStore((state) => state.invest);
  const clickTimer = useStore((state) => state.clickTimer);

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
      <MoneyButton
        onMoneyButtonClick={handleMoneyButtonClick}
        tier={currentTier}
      />
      <ProgressBar isFilling={currentTier.isFilling} tier={currentTier} />

      <Milestones
        investCount={investCount}
        currentMilestone={milestones[milestoneIndex]}
        tier={currentTier}
      />
      <InvestButton
        onInvest={handleInvest}
        money={money}
        investPrice={investPrice}
      />
    </>
  );
}
