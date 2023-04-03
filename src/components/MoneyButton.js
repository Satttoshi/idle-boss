import useStore from "~/src/zustand/store";

export default function MoneyButton() {
  const { addMoney, tier } = useStore();
  const { delay } = tier[0];
  return (
    <button type="button" onClick={addMoney}>
      Click me
    </button>
  );
}
