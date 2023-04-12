import styled from "styled-components";
import TierLogo from "./TierLogo";

export default function MoneyButton({ tier, onMoneyButtonClick }) {
  return (
    <StyledButton
      type="button"
      disabled={tier.isFilling || tier.hasManager}
      onClick={() => {
        onMoneyButtonClick();
      }}
    >
      <TierLogo tierId={tier.id} />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  appearance: none;
  border: none;
  padding: 0;
  position: absolute;
  top: 4px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  z-index: 10;
  background-color: var(--1);
  color: var(--5);
  cursor: pointer;

  display: grid;
  place-items: center;

  :disabled {
    cursor: default;
    background-color: var(--3);
  }

  @media (hover: hover) {
    &:hover {
    }
  }

  @media (hover: none) {
    &:active,
    &:focus {
    }
  }
`;
