import useStore from "~/src/zustand/store";

export default function InvestButton() {
  const { getTierById, setTier } = useStore();

  function handleInvest() {
    currentTier = getTierById("tier1");

    setTier({
      id: "tier1",
      income: currentTier.income * 2,
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
