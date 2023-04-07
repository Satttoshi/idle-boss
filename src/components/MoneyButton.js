import styled from "styled-components";
import { useState } from "react";

export default function MoneyButton({
  tier,
  isFilling,
  onTimerStart,
  onTimerEnd,
}) {
  const { delay } = tier;
  const [timeoutId, setTimeoutId] = useState(null);

  function onClick(delay) {
    onTimerStart();
    setTimeoutId(
      setTimeout(() => {
        onTimerEnd();
      }, delay)
    );
    console.log(timeoutId);
  }

  function updateTimeout(newDelay) {
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
        onClick(delay);
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
