import useStore from "~/src/zustand/store";

export default function MoneyButton() {
  const { addMoney } = useStore();
  return (
    <button type="button" onClick={addMoney}>
      Click me
    </button>
  );
}
