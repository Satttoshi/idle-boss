import styled from "styled-components";
import useStore from "~/src/zustand/store";

export default function MoneyButton({ tier, isFilling }) {
  const { clickTimer } = useStore();

  function updateTimeout(newDelay, isFilling) {
    if (isFilling) {
      clearTimeout(timeoutId);
      setTimeoutId(setTimeout(() => onTimerEnd(), newDelay));
    }
  }

  return (
    <StyledButton
      type="button"
      disabled={isFilling}
      onClick={() => {
        clickTimer(tier.id);
      }}
    >
      Create & Sell
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 75px;
  width: 75px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: hotpink;
  }
`;
