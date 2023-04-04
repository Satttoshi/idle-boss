import useStore from "~/src/zustand/store";

export default function InvestButton() {
  const { tier } = useStore();
  const invest = tier[0].investPrice + " €";
  return <button type="button">{invest}</button>;
}
