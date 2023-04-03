import useStore from "@/src/zustand/store";

export default function MoneyDisplay() {
  const { money } = useStore();

  return (
    <div>
      <h1>Money: {money}</h1>
    </div>
  );
}
