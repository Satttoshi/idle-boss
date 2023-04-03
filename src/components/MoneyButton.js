import useStore from "~/src/zustand/store";

export default function MoneyButton() {
  const { addMoney, tier } = useStore();
  const { isFilling, changeFilling, delay } = tier[0];

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
