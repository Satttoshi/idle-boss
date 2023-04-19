import styled, { keyframes } from "styled-components";
import formatNumbers from "~/src/utils/format-numbers";

export default function PopupText({ tier }) {
  const { id, incomePerSecond, isPerSecond, income } = tier;

  if (!incomePerSecond) {
    return null;
  }

  const displayIncome =
    (isPerSecond ? formatNumbers(incomePerSecond) : formatNumbers(income)) +
    (isPerSecond ? " /sec" : " €");

  return <StyledPopup key={id + income}>{displayIncome}</StyledPopup>;
}

const PopupAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
    }
  to {
    opacity: 0;
    transform: translateY(-10px);
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

  text-shadow: -1px -1px 0 var(--5), 1px -1px 0 var(--5), -1px 1px 0 var(--5),
    1px 1px 0 var(--5);

  animation-name: ${PopupAnimation};
  animation-duration: 800ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
