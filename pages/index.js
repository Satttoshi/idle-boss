import MoneyDisplay from "~/src/components/MoneyDisplay";
import Product from "~/src/components/Product";
import styled from "styled-components";

export default function HomePage() {
  return (
    <div>
      <MoneyDisplay />
      <StyledMain>
        <Product tierId="tier1" />
        <Product tierId="tier2" />
        <Product tierId="tier3" />
        <Product tierId="tier4" />
        <Product tierId="tier5" />
      </StyledMain>
    </div>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
