import useStore from "~/src/zustand/store";

export default function InvestButton() {
  const { tiers, setTier } = useStore();

  function getTierById(id) {
    return tiers.find((tier) => tier.id === id);
  }

  function handleInvest() {
    const currentTier = getTierById("tier1");

    console.log(currentTier);

    setTier({
      id: "tier1",
      income: currentTier.income + 5,
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
