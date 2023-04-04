import useStore from "~/src/zustand/store";

export default function InvestButton() {
  const { setTier } = useStore();

  function handleInvest() {
    setTier({
      id: "tier1",
      income: 20,
    });
  }

  return (
    <button
      type="button"
      onClick={() => {
        handleInvest();
      }}
    >
      {"Invest! price: " + "xx"}
    </button>
  );
}
