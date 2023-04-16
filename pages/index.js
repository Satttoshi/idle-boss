import MoneyDisplay from "~/src/components/MoneyDisplay";
import Product from "~/src/components/Product";
import styled from "styled-components";
import useStore from "~/src/zustand/store";

export default function HomePage() {
  const { setMoney } = useStore();

  return (
    <>
      <MoneyDisplay />
      <StyledMain>
        <Product tierId="tier1" />
        <Product tierId="tier2" />
        <Product tierId="tier3" />
        <Product tierId="tier4" />
        <Product tierId="tier5" />
      </StyledMain>
      <button onClick={() => setMoney(1000000000)}>Cheat Money</button>
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
