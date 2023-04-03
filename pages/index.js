import MoneyDisplay from "~/src/components/MoneyDisplay";
import MoneyButton from "~/src/components/MoneyButton";
import ProgressBar from "~/src/components/ProgressBar";

export default function HomePage() {
  return (
    <div>
      <MoneyDisplay />
      <MoneyButton />
      <ProgressBar />
    </div>
  );
}
