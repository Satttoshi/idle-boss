import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

export default function ProgressBar({ tier, isFilling }) {
  const { delay, income } = tier;

  const [currentDelay, setCurrentDelay] = useState(delay);

  useEffect(() => {
    setCurrentDelay(delay);
  }, [isFilling]);

  const displayIncome =
    income.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " €";

  return (
    <StyledWrapper>
      <StyledIncome>{displayIncome}</StyledIncome>
      <StyledContainer data-testid="progress-bar">
        {isFilling ? <StyledBar delay={currentDelay} /> : null}
      </StyledContainer>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 50px;
`;

const StyledIncome = styled.span`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 10;
`;

const StyledContainer = styled.div`
  background-color: aqua;
  width: 400px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

const fillingAnimation = keyframes`
  
    from {
      width: 0;
      background: hotpink;
    }

    to {
      width: 100%;
      background: hotpink;
    }
  `;

const StyledBar = styled.div`
  position: absolute;
  left: 0;
  height: 30px;
  display: inline-block;
  overflow: hidden;
  animation-name: ${fillingAnimation};
  animation-duration: ${({ delay }) => delay}ms;
  animation-iteration-count: 1;
  animation-timing-function: linear;
`;
