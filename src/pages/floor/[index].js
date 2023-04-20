import MoneyDisplay from "~/src/components/MoneyDisplay";
import Product from "~/src/components/Product";
import styled from "styled-components";
import Navigation from "~/src/components/Navigation";
import Layout from "~/src/components/Layout";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const { index } = router.query;

  if (index === "1") {
    return (
      <>
        <Layout>
          <StyledMain>
            <StyledSection floor={-1080}>
              <Product key="tier6" tierId="tier6" />
              <Product key="tier7" tierId="tier7" />
              <Product key="tier8" tierId="tier8" />
              <Product key="tier9" tierId="tier9" />
            </StyledSection>
            <StyledSection floor={80}>
              <Product key="tier1" tierId="tier1" />
              <Product key="tier2" tierId="tier2" />
              <Product key="tier3" tierId="tier3" />
              <Product key="tier4" tierId="tier4" />
              <Product key="tier5" tierId="tier5" />
            </StyledSection>
          </StyledMain>
        </Layout>
      </>
    );
  } else if (index === "2") {
    return (
      <>
        <Layout>
          <StyledMain>
            <Product key="tier6" tierId="tier6" />
            <Product key="tier7" tierId="tier7" />
            <Product key="tier8" tierId="tier8" />
            <Product key="tier9" tierId="tier9" />
          </StyledMain>
        </Layout>
      </>
    );
  }
}

const StyledSection = styled.section`
  position: absolute;
  top: ${({ floor }) => floor + "px"};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 80px 0;
  border: 2px solid red;
`;

const StyledMain = styled.main`
  padding: 80px 0 0 0;
`;
