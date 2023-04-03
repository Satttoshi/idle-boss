import useStore from "~/src/zustand/store";

export default function MoneyButton() {
  const { addMoney, tier } = useStore();
  const { delay } = tier[0];

  let disabled = false;
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => {
        disabled = true;
        addMoney();
        setTimeout(() => {
          addMoney();
          disabled = false;
        }, delay);
      }}
    >
      Click me
    </button>
  );
}
