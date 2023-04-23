import Form1 from "~/src/assets/animation/rotate1.svg";
import Form2 from "~/src/assets/animation/rotate2.svg";
import Form3 from "~/src/assets/animation/rotate3.svg";
import styled, { keyframes } from "styled-components";

export default function MoneyButtonAnimation({ forModal }) {
  return (
    <StyledContainer forModal={forModal}>
      <StyledForm1 />
      <StyledForm2 />
      <StyledForm3 />
    </StyledContainer>
  );
}

const opacity = keyframes`
    0% {
        opacity: 0;
        }
    100% {
        opacity: 1;
        }
`;

const StyledContainer = styled.div`
  z-index: 15;
  position: absolute;
  top: ${({ forModal }) => (forModal ? -5 : 0)}px;
  left: ${({ forModal }) => (forModal ? -5 : 0)}px;

  animation: ${opacity} 0.5s ease-out;
`;

const rotate1 = keyframes`
    0% {
        transform: rotate(0deg);
        }
    100% {
        transform: rotate(-360deg);
        }
`;

const rotate2 = keyframes`
    0% {
        transform: rotate(0deg);
        }
    100% {
        transform: rotate(360deg);
        }
`;

const rotate3 = keyframes`
    0% {
        transform: rotate(0deg);
        }
    100% {
        transform: rotate(360deg);
        }
`;

const StyledForm1 = styled(Form1)`
  position: absolute;
  top: 3px;
  left: 3px;
  opacity: 0.7;
  scale: 1.2;
  fill: var(--4);

  animation: ${rotate1} 10s cubic-bezier(0.49, -0.49, 0.58, 1.64) infinite;
`;

const StyledForm2 = styled(Form2)`
  position: absolute;
  top: 10px;
  left: 10px;
  fill: var(--5);

  animation: ${rotate2} 1s linear infinite;
  opacity: 0.5;
  scale: 1.25;
`;

const StyledForm3 = styled(Form3)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
  scale: 1.11;
  fill: var(--1);

  animation: ${rotate3} 8s linear infinite;
`;
