import styled, { keyframes } from "styled-components";
import LoadingCircle from "~/src/assets/loading-circle.svg";

export default function LoadingToast() {
  return (
    <StyledLoadingToast>
      <StyledLoadingCircle />
      <StyledText>saving ...</StyledText>
    </StyledLoadingToast>
  );
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    }
20% {
    opacity: 1;
    }
80% {
    opacity: 1;
    }
    100% {
    opacity: 0;
    }
`;

const StyledLoadingToast = styled.div`
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 115;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  animation: ${fadeIn} 2s ease-in-out 1 forwards;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    }
100% {
    transform: rotate(360deg);
    }
`;

const StyledLoadingCircle = styled(LoadingCircle)`
  fill: var(--1);

  animation: ${rotate} 2s linear infinite;
`;

const StyledText = styled.span`
  font-family: var(--font1);
  font-size: 0.7rem;
  font-weight: 400;
  color: var(--1);
`;
