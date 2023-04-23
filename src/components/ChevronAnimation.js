import styled, { keyframes } from "styled-components";
import Chevron from "~/src/assets/chevron-up.svg";

export default function ChevronAnimation() {
  return (
    <StyledChevronContainer>
      <StyledChevron variant={0} />
      <StyledChevron variant={1} />
      <StyledChevron variant={2} />
    </StyledChevronContainer>
  );
}

const StyledChevronContainer = styled.div`
  position: absolute;

  top: -50px;
  left: 53px;
  transform: rotate(-30deg);
`;

const move = keyframes`
    0% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(15px);
    }
    `;

const StyledChevron = styled(Chevron)`
  position: absolute;
  top: ${(props) => props.variant * 15}px;
  width: 40px;
  height: 40px;
  fill: var(--1);

  animation: ${move} 1s ease-in-out infinite alternate
    ${(props) => props.variant / 5}s;
`;
