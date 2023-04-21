import Product from "~/src/components/Product";
import styled from "styled-components";
import Layout from "~/src/components/Layout";
import useStore from "~/src/zustand/store";
import BossFloor from "../../components/BossFloor";

export default function HomePage() {
  const currentFloor = useStore((state) => state.currentFloor);
  const availableFloors = useStore((state) => state.availableFloors);
  const currentBossFloor = availableFloors.length;

  function getPosition() {
    if (currentFloor === currentBossFloor) {
      return { floor1: "1080px", floor2: "1080px", bossFloor: "80px" };
    }

    switch (currentFloor) {
      case 1:
        return { floor1: "80px", floor2: "-920px", bossFloor: "-920px" };
      case 2:
        return { floor1: "1080px", floor2: "80px", bossFloor: "-920px" };
      default:
        return { floor1: "1080px", floor2: "1080px", bossFloor: "80px" };
    }
  }

  const { floor1, floor2, bossFloor } = getPosition();

  return (
    <>
      <Layout>
        <StyledMain>
          <StyledSection floor={bossFloor}>
            <BossFloor />
          </StyledSection>
          {availableFloors.length > 2 ? (
            <StyledSection floor={floor2}>
              <Product key="tier6" tierId="tier6" />
              <Product key="tier7" tierId="tier7" />
              <Product key="tier8" tierId="tier8" />
              <Product key="tier9" tierId="tier9" />
            </StyledSection>
          ) : null}
          <StyledSection floor={floor1}>
            <Product key="tier1" tierId="tier1" />
            <Product key="tier2" tierId="tier2" />
            <Product key="tier3" tierId="tier3" />
            <Product key="tier4" tierId="tier4" />
            <Product key="tier5" tierId="tier5" />
            <StyledScrollEnd />
          </StyledSection>
        </StyledMain>
      </Layout>
    </>
  );
}

const StyledScrollEnd = styled.div`
  height: 100px;
  flex-shrink: 0;

  @media (min-height: 770px) {
    flex-shrink: 1;
  }
`;

const StyledSection = styled.section`
  position: absolute;
  top: ${({ floor }) => floor};
  left: 50%;
  transform: translateX(-50%);
  height: 527px;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  transition: top 0.5s ease-in-out;
  overflow: scroll;

  @media (min-height: 740px) {
    height: 600px;
  }

  @media (min-height: 770px) {
    height: 700px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledMain = styled.main`
  padding: 80px 0 0 0;
`;
