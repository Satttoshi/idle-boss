import useStore from "~/src/zustand/store";

export default function InvestButton() {
  const { money, tiers, setTier, setMoney } = useStore();

  // in preperation for multiple tiers
  function getTierById(id) {
    return tiers.find((tier) => tier.id === id);
  }

  function handleInvest() {
    const currentTier = getTierById("tier1");
    if (currentTier.investPrice > money) {
      return;
    }
    setMoney(-currentTier.investPrice);

    setTier({
      id: "tier1",
      income: currentTier.income + 5,
      investPrice: currentTier.investPrice + 50,
    });
  }

  return (
    <button
      type="button"
      onClick={() => {
        handleInvest();
      }}
    >
      {"Invest! price: " + getTierById("tier1").investPrice + " €"}
    </button>
  );
}
