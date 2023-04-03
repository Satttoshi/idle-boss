import useStore from "~/src/zustand/store";

export default function MoneyDisplay() {
  const { money } = useStore();

  const moneyString =
    money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00 €";

  return (
    <div>
      <h1>Money: {moneyString}</h1>
    </div>
  );
}
