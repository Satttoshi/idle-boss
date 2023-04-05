import styled from "styled-components";
import useStore from "~/src/zustand/store";

export default function TierLocked() {
  //dummy data
  const tierId = "tier2";

  const { unlockTier } = useStore();

  function handleUnlock(tierId) {
    unlockTier(tierId);
  }

  return (
    <StyledButton
      type="button"
      onClick={() => {
        handleUnlock(tierId);
      }}
    >
      <h2>Product Locked</h2>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 150px;
  width: 500px;
`;
