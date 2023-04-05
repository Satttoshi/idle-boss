import MoneyDisplay from "~/src/components/MoneyDisplay";
import Product from "~/src/components/Product";

export default function HomePage() {
  return (
    <div>
      <MoneyDisplay />
      <Product tierId="tier1" />
      <Product tierId="tier2" />
      <Product tierId="tier3" />
    </div>
  );
}
