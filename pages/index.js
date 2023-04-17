import MoneyDisplay from "~/src/components/MoneyDisplay";
import Product from "~/src/components/Product";
import styled from "styled-components";
import Navigation from "~/src/components/Navigation";

export default function HomePage() {
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
      <Navigation />
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  z-index: 100;
  align-items: center;
  margin-top: 80px;
  overflow-y: scroll;
`;
