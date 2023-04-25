import styled, { keyframes } from "styled-components";
import Form1 from "~/src/assets/animation/flow1.svg";
import Form2 from "~/src/assets/animation/flow2.svg";
import Form3 from "~/src/assets/animation/flow3.svg";

export default function ProgressBarAnimation({ isPerSecond }) {
  return (
    <FlowAnimationContainer>
      <StyledForm1 />
      <StyledForm2 />
      <StyledForm3 />
    </FlowAnimationContainer>
  );
}

const FlowAnimationContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 496px;
  height: 30px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  mask-image: linear-gradient(
    to right,
    transparent,
    transparent 55%,
    black 60%,
    black 90%,
    transparent
  );
`;

const move = keyframes`
    0% {
        transform: translateX(0px);
        }
    100% {
        transform: translateX(248px);
        }
`;

const StyledForm1 = styled(Form1)`
  position: absolute;
  top: 5px;
  right: 47px;
  stroke: var(--1);
  opacity: 0.3;

  animation: ${move} 7s linear infinite;
`;

const StyledForm2 = styled(Form2)`
  position: absolute;
  top: 3px;
  right: 18px;
  stroke: var(--4);
  opacity: 0.2;

  animation: ${move} 4s linear infinite;
`;

const StyledForm3 = styled(Form3)`
  position: absolute;
  top: 1px;
  right: 3px;
  stroke: var(--1);
  opacity: 0.7;

  animation: ${move} 1.5s linear infinite;
`;
