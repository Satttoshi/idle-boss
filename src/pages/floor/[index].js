import Product from "~/src/components/Product";
import styled from "styled-components";
import Layout from "~/src/components/Layout";
import useStore from "~/src/zustand/store";
import BossFloor from "../../components/BossFloor";
import ManagerModal from "../../components/ManagerModal";
import StyledPageSection from "../../components/StyledPageSection";
import TutorialModal from "~/src/components/TutorialModal";
import ConstructionModal from "~/src/components/ConstructionModal";

export default function HomePage() {
  const currentFloor = useStore((state) => state.currentFloor);
  const availableFloors = useStore((state) => state.availableFloors);
  const currentBossFloor = availableFloors.length;

  const isTutorialActive = useStore((state) => state.isTutorialActive);
  const isManagerModalOpen = useStore((state) => state.isManagerModalOpen);
  const isConstructionModalOpen = useStore(
    (state) => state.isConstructionModalOpen
  );
  const userName = useStore((state) => state.username);

  function getPosition() {
    if (currentFloor === currentBossFloor) {
      return { floor1: "1440px", floor2: "1440px", bossFloor: "80px" };
    }
    switch (currentFloor) {
      case 1:
        return { floor1: "80px", floor2: "-920px", bossFloor: "-920px" };
      case 2:
        return { floor1: "1440px", floor2: "80px", bossFloor: "-920px" };
      default:
        return { floor1: "1440px", floor2: "1440px", bossFloor: "80px" };
    }
  }

  const { floor1, floor2, bossFloor } = getPosition();

  return (
    <>
      {isTutorialActive && <TutorialModal />}
      {isManagerModalOpen && <ManagerModal userName={userName} />}
      {isConstructionModalOpen && <ConstructionModal />}

      <Layout>
        <StyledMain>
          <StyledPageSection floor={bossFloor}>
            <BossFloor />
          </StyledPageSection>
          {availableFloors.length > 2 ? (
            <StyledPageSection floor={floor2}>
              <Product key="tier6" tierId="tier6" />
              <Product key="tier7" tierId="tier7" />
              <Product key="tier8" tierId="tier8" />
              <Product key="tier9" tierId="tier9" />
            </StyledPageSection>
          ) : null}
          <StyledPageSection floor={floor1}>
            <Product key="tier1" tierId="tier1" />
            <Product key="tier2" tierId="tier2" />
            <Product key="tier3" tierId="tier3" />
            <Product key="tier4" tierId="tier4" />
            <Product key="tier5" tierId="tier5" />
            <StyledScrollEnd />
          </StyledPageSection>
          <StyledContentHider />
        </StyledMain>
      </Layout>
    </>
  );
}

const StyledContentHider = styled.div`
  background: var(--6);
  position: absolute;
  top: 1440px;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;
  height: 800px;
  z-index: 95;
`;

const StyledScrollEnd = styled.div`
  height: 100px;
  flex-shrink: 0;

  @media (min-height: 770px) {
    flex-shrink: 1;
  }
`;

const StyledMain = styled.main`
  padding: 80px 0 0 0;
`;
