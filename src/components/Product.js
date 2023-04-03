import MoneyButton from "./MoneyButton";
import ProgressBar from "./ProgressBar";
import useStore from "~/src/zustand/store";
import { useState } from "react";

export default function Product() {
  const { addMoney, tier } = useStore();
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
        tier={tier[0]}
        isFilling={isFilling}
        onTimerStart={handleTimerStart}
        onTimerEnd={handleTimerEnd}
      />
      <ProgressBar isFilling={isFilling} tier={tier[0]} />
    </>
  );
}
