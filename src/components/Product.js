import styled from "styled-components";
import Tier from "./Tier";
import TierLocked from "./TierLocked";
import useStore from "~/src/zustand/store";

export default function Product({ tierId }) {
  const { getTierById } = useStore();
  const currentTier = getTierById(tierId);

  return (
    <StyledSection>
      {currentTier.isUnlocked ? (
        <Tier currentTier={currentTier} />
      ) : (
        <TierLocked currentTier={currentTier} />
      )}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  height: 200px;
  width: 500px;
`;
