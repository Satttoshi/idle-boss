import MoneyButton from "./MoneyButton";
import ProgressBar from "./ProgressBar";
import useStore, { milestones } from "~/src/zustand/store";
import InvestButton from "./InvestButton";
import Milestones from "./Milestones";

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
      <MoneyButton
        onMoneyButtonClick={handleMoneyButtonClick}
        isFilling={currentTier.isFilling}
      />
      <ProgressBar isFilling={currentTier.isFilling} tier={currentTier} />

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
