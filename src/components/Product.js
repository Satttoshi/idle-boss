import MoneyButton from "./MoneyButton";
import ProgressBar from "./ProgressBar";
import useStore from "~/src/zustand/store";
import { useState } from "react";

export default function Product() {
  const { addMoney, tier } = useStore();
  const [isFilling, changeFilling] = useState(false);

  function handleChangeFilling() {
    changeFilling((prev) => !prev);
  }

  return (
    <>
      <MoneyButton
        addMoney={addMoney}
        tier={tier[0]}
        isFilling={isFilling}
        changeFilling={handleChangeFilling}
      />
      <ProgressBar isFilling={isFilling} tier={tier[0]} />
    </>
  );
}
