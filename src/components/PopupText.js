import styled, { keyframes } from "styled-components";

export default function PopupText({ tier }) {
  const { delay, incomePerSecond, isPerSecond } = tier;
  const addedIncome = (incomePerSecond * delay) / 1000;

  if (addedIncome === 0) {
    return null;
  }

  const displayIncome =
    (isPerSecond
      ? incomePerSecond
      : (incomePerSecond * delay) / 1000
    ).toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + (isPerSecond ? " /sec" : " €");

  return <StyledPopup key={addedIncome}>{displayIncome}</StyledPopup>;
}

const PopupAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
    }
  100% {
    opacity: 0;
    transform: translateY(-15px);
    }`;

const StyledPopup = styled.span`
  position: absolute;
  width: 225px;
  top: 11px;
  left: 21px;
  z-index: 10;
  color: var(--1);
  font-family: var(--font1);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;

  animation-name: ${PopupAnimation};
  animation-duration: 800ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
