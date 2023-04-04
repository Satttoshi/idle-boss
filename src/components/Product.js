import MoneyButton from "./MoneyButton";
import ProgressBar from "./ProgressBar";
import useStore from "~/src/zustand/store";
import { useState, useEffect } from "react";
import InvestButton from "./InvestButton";
import Milestones from "./Milestones";

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
      investCount: currentTier.investCount + 1,
    });
  }

  const { investPrice, investCount } = getTierById("tier1");

  // Milestone logic
  const [selector, setSelector] = useState(0);
  const milestones = [15, 30, 50, 75, 100, 200, "max"];
  const currentMilestone = milestones[selector];

  useEffect(() => {
    if (
      investCount >= milestones[selector] &&
      selector < milestones.length - 1
    ) {
      setSelector(selector + 1);
      const currentTier = getTierById("tier1");
      setTier({
        id: "tier1",
        delay: currentTier.delay - 800,
      });
      console.log(currentTier.delay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [investCount]);

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
      <Milestones
        investCount={investCount}
        currentMilestone={currentMilestone}
      />
    </>
  );
}
