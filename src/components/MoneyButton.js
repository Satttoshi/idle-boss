import styled from "styled-components";

export default function MoneyButton({ isFilling, onMoneyButtonClick }) {
  return (
    <StyledButton
      type="button"
      disabled={isFilling}
      onClick={() => {
        onMoneyButtonClick();
      }}
    >
      Create & Sell
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 84px;
  width: 84px;
  z-index: 10;
  transform: translateX(15%);
  background-color: var(--5);
  border: 3px solid var(--4);
  border-radius: 50%;
  color: var(--1);
  cursor: pointer;
  font-size: 1.2rem;

  @media (hover: hover) {
    &:hover {
      background-color: var(--1);
      border-color: var(--5);
      color: var(--5);
      font-weight: bold;
    }
  }

  @media (hover: none) {
    &:active,
    &:focus {
      background-color: var(--1);
      border-color: var(--5);
      color: var(--5);
      font-weight: bold;
    }
  }
`;
