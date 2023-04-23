import styled from "styled-components";
import useStore from "~/src/zustand/store";
import formatNumbers from "~/src/utils/format-numbers";

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

  const formattedPrice = formatNumbers(currentTier.unlockPrice) + " €";

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
  border-radius: 30px;

  font-family: var(--font1);

  h2 {
    font-size: 18px;
    font-weight: 400;
    margin: 0px;
  }

  h3 {
    font-weight: 600;
    margin: 0px;
  }

  :disabled {
    cursor: default;
    background-color: var(--4);
    opacity: 0.5;
  }

  @media (hover: hover) {
    &:hover:enabled {
      background-color: var(--3);
    }
  }

  @media (hover: none) {
    &:active:enabled {
      background-color: var(--3);
    }
  }
`;
