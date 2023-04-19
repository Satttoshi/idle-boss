import styled from "styled-components";
import InvestIcon from "~/src/assets/invest.svg";
import formatNumbers from "~/src/utils/format-numbers";

export default function InvestButton({ onInvest, money, investPrice }) {
  const displayPrice = formatNumbers(investPrice) + " €";

  return (
    <StyledButton
      type="button"
      disabled={money < investPrice}
      onClick={() => {
        onInvest();
      }}
    >
      <InvestIcon width="24" height="24" fill="var(--5)" />
      <p>{displayPrice}</p>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  appearance: none;
  border: none;
  position: absolute;
  bottom: 0;
  right: 15px;
  height: 28px;
  width: 140px;
  border-radius: 17px;

  display: flex;
  align-items: center;

  background-color: var(--1);
  transition: background-color 0.1s ease-in-out;
  color: var(--5);
  font-family: var(--font1);
  font-weight: 600;
  cursor: pointer;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  p {
    margin: 0;
    width: 105px;
  }

  :disabled {
    cursor: default;
    background-color: var(--4);
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
