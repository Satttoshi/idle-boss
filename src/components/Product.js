import styled from "styled-components";
import Tier from "./Tier";
import TierLocked from "./TierLocked";
import useStore from "~/src/zustand/store";

export default function Product({ tierId }) {
  const { tiers } = useStore();
  const currentTier = tiers.find((tier) => tier.id === tierId);
  return (
    <StyledSection>
      {" "}
      {currentTier.isUnlocked ? (
        <Tier tierId={tierId} />
      ) : (
        <TierLocked tierId={tierId} />
      )}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  height: 200px;
  width: 500px;
`;
