import { useState } from "react";

export default function MoneyButton({
  addMoney,
  tier,
  isFilling,
  changeFilling,
}) {
  const { delay } = tier;

  return (
    <button
      type="button"
      disabled={isFilling}
      onClick={() => {
        changeFilling();
        setTimeout(() => {
          addMoney();
          changeFilling();
        }, delay);
      }}
    >
      Click me
    </button>
  );
}
