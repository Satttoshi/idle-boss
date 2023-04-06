import MoneyDisplay from "~/src/components/MoneyDisplay";
import Product from "~/src/components/Product";

export default function HomePage() {
  return (
    <div>
      <MoneyDisplay />
      <Product tierId="tier1" />
      <Product tierId="tier2" />
      <Product tierId="tier3" />
      <Product tierId="tier4" />
      <Product tierId="tier5" />
    </div>
  );
}
