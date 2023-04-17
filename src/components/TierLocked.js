import styled from "styled-components";
import useStore from "~/src/zustand/store";

export default function TierLocked({ currentTier }) {
  const unlock = useStore((state) => state.unlock);
  const money = useStore((state) => state.money);

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
      disabled={currentTier.unlockPrice > money}
      onClick={() => {
        handleUnlock(currentTier.id);
      }}
    >
      <h2>Unlock {currentTier.name}!</h2>
      <h3>Price: {formattedPrice}</h3>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  appearance: none;
  border: none;
  height: 94px;
  width: 307px;
  cursor: pointer;

  color: var(--5);
  background-color: var(--1);

  :disabled {
    cursor: default;
    background-color: var(--4);
  }
`;
