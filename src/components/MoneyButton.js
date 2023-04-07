import styled from "styled-components";

export default function MoneyButton({
  tier,
  isFilling,
  onTimerStart,
  onTimerEnd,
}) {
  const { delay } = tier;

  function onClick() {
    onTimerStart();
    const timeout = setTimeout(() => {
      onTimerEnd();
    }, delay);
    console.log(timeout);
  }

  return (
    <StyledButton
      type="button"
      disabled={isFilling}
      onClick={() => {
        onClick();
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
