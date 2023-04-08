import styled from "styled-components";
import WordpressIcon from "~/src/assets/wordpress.svg";

export default function MoneyButton({ isFilling, onMoneyButtonClick }) {
  return (
    <StyledButton
      type="button"
      disabled={isFilling}
      onClick={() => {
        onMoneyButtonClick();
      }}
    >
      <WordpressIcon width="48" height="48" fill="var(--5)" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  appearance: none;
  border: none;
  position: absolute;
  top: 4px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  z-index: 10;
  background-color: var(--1);
  color: var(--5);
  cursor: pointer;
  font-size: 1.2rem;

  display: grid;
  place-items: center;

  @media (hover: hover) {
    &:hover {
      background-color: var(--5);
      color: var(--1);
    }
  }

  @media (hover: none) {
    &:active,
    &:focus {
      background-color: var(--5);
      color: var(--1);
    }
  }
`;
