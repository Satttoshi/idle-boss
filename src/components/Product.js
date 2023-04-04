import MoneyButton from "./MoneyButton";
import ProgressBar from "./ProgressBar";
import useStore from "~/src/zustand/store";
import { useState } from "react";
import InvestButton from "./InvestButton";

export default function Product() {
  const { setMoney, tiers, setTier, money } = useStore();
  const [isFilling, setIsFilling] = useState(false);

  // in preperation for multiple tiers
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

  function handleInvest() {
    const currentTier = getTierById("tier1");
    if (currentTier.investPrice > money) {
      return;
    }
    setMoney(-currentTier.investPrice);

    setTier({
      id: "tier1",
      income: currentTier.income + 5,
      investPrice: currentTier.investPrice + 50,
    });
  }

  const { investPrice } = getTierById("tier1");

  return (
    <>
      <MoneyButton
        tier={tiers[0]}
        isFilling={isFilling}
        onTimerStart={handleTimerStart}
        onTimerEnd={handleTimerEnd}
      />
      <ProgressBar isFilling={isFilling} tier={tiers[0]} />
      <InvestButton
        onInvest={handleInvest}
        money={money}
        investPrice={investPrice}
      />
    </>
  );
}
