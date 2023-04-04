export default function InvestButton({ onInvest, money, investPrice }) {
  return (
    <button
      type="button"
      disabled={money < investPrice}
      onClick={() => {
        onInvest();
      }}
    >
      {"Invest! price: " + investPrice + " €"}
    </button>
  );
}
