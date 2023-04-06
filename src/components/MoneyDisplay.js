import useStore from "~/src/zustand/store";

export default function MoneyDisplay() {
  const { money } = useStore();

  const moneyString =
    money.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " €";

  return (
    <div>
      <h1>Money: {moneyString}</h1>
    </div>
  );
}
