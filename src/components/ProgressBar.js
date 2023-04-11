import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import ProgressStars from "./ProgressStars";

export default function ProgressBar({ tier, isFilling }) {
  const { delay, income } = tier;
  const [currentDelay, setCurrentDelay] = useState(delay);

  useEffect(() => {
    setCurrentDelay(delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilling]);

  const displayIncome =
    income.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " €";

  return (
    <StyledProgressBar>
      <ProgressStars tier={tier} />
      <StyledWrapper>
        <StyledIncome>{displayIncome}</StyledIncome>
        <StyledContainer data-testid="progress-bar">
          {isFilling ? <StyledBar delay={currentDelay} /> : null}
          <StyledUnfilledBar />
        </StyledContainer>
      </StyledWrapper>
    </StyledProgressBar>
  );
}

const StyledProgressBar = styled.div`
  position: absolute;
  top: 9px;
  right: 0;
  background-color: var(--5);
  border-radius: 0px 10px 10px 0px;
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 248px;
  height: 50px;
`;

const StyledIncome = styled.span`
  position: absolute;
  width: 225px;
  top: 11px;
  left: 21px;
  z-index: 10;
  color: var(--5);
  font-family: var(--font1);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const StyledContainer = styled.div`
  width: 248px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
`;

const fillingAnimation = keyframes`
  
    from {
      width: 0;
      
    }

    to {
      width: 100%;
    }
  `;

const StyledBar = styled.div`
  background: var(--3);
  position: absolute;
  left: 0;
  height: 30px;
  z-index: 5;
  display: inline-block;
  overflow: hidden;
  animation-name: ${fillingAnimation};
  animation-duration: ${({ delay }) => delay}ms;
  animation-iteration-count: 1;
  animation-timing-function: linear;
`;

const StyledUnfilledBar = styled.div`
  background: var(--4);
  position: absolute;
  width: 100%;
  z-index: 2;
  right: 2px;
  height: 30px;
  display: inline-block;
  overflow: hidden;
`;
