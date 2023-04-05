import styled from "styled-components";
import useStore from "~/src/zustand/store";

export default function TierLocked({ tierId, currentTier }) {
  //dummy data

  const { unlock } = useStore();

  function handleUnlock(tierId) {
    try {
      unlock(tierId);
    } catch (error) {
      // do something when not enough money
      console.error(error.message);
    }
  }

  const formattedPrice =
    currentTier.unlockPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +
    ",00 €";

  return (
    <StyledButton
      type="button"
      onClick={() => {
        handleUnlock(tierId);
      }}
    >
      <h2>Product Locked</h2>
      <h3>Price: {formattedPrice}</h3>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 150px;
  width: 500px;
  cursor: pointer;
`;
