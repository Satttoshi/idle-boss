import MoneyDisplay from "~/src/components/MoneyDisplay";
import Product from "~/src/components/Product";
import styled from "styled-components";
import Navigation from "~/src/components/Navigation";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const { index } = router.query;

  if (index === "1") {
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
  } else if (index === "2") {
    return (
      <>
        <MoneyDisplay />
        <StyledMain>
          <Product tierId="tier6" />
          <Product tierId="tier7" />
          <Product tierId="tier8" />
          <Product tierId="tier9" />
          <Product tierId="tier10" />
        </StyledMain>
        <Navigation />
      </>
    );
  }
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  z-index: 100;
  align-items: center;
  padding: 80px 0 80px 0;
  overflow-y: auto;
`;
