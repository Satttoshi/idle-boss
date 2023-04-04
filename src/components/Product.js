import MoneyButton from "./MoneyButton";
import ProgressBar from "./ProgressBar";
import useStore from "~/src/zustand/store";
import { useState } from "react";
import InvestButton from "./InvestButton";

export default function Product() {
  const { addMoney, tiers } = useStore();
  const [isFilling, setIsFilling] = useState(false);

  function handleTimerStart() {
    setIsFilling(true);
  }

  function handleTimerEnd() {
    setIsFilling(false);
    addMoney();
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
