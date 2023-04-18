import MoneyDisplay from "./MoneyDisplay";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <MoneyDisplay />
      {children}
      <Navigation />
    </>
  );
}
