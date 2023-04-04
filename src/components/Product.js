import MoneyButton from "./MoneyButton";
import ProgressBar from "./ProgressBar";
import useStore from "~/src/zustand/store";
import { useState } from "react";
import InvestButton from "./InvestButton";

export default function Product() {
  const { setMoney, tiers } = useStore();
  const [isFilling, setIsFilling] = useState(false);

  function getTierById(id) {
    return tiers.find((tier) => tier.id === id);
  }

  function handleTimerStart() {
    setIsFilling(true);
  }

  function handleTimerEnd() {
    setIsFilling(false);
    const currentTier = getTierById("tier1");
    setMoney(currentTier.income);
  }

  return (
    <>
      <MoneyButton
        tier={tiers[0]}
        isFilling={isFilling}
        onTimerStart={handleTimerStart}
        onTimerEnd={handleTimerEnd}
      />
      <ProgressBar isFilling={isFilling} tier={tiers[0]} />
      <InvestButton />
    </>
  );
}
