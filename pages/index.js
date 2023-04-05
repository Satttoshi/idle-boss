import MoneyDisplay from "~/src/components/MoneyDisplay";
import Product from "~/src/components/Product";
import ProductLocked from "../src/components/ProductLocked";

export default function HomePage() {
  return (
    <div>
      <MoneyDisplay />
      <Product tierId="tier1" />
      <ProductLocked />
      <Product tierId="tier2" />
      <Product tierId="tier3" />
    </div>
  );
}
