import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import ProgressStars from "./ProgressStars";
import PopupText from "./PopupText";
import formatNumbers from "~/src/utils/format-numbers";
import ProgressBarAnimation from "./ProgressBarAnimation";
import TierTimer from "./TierTimer";

export default function ProgressBar({ tier, isFilling }) {
  const { delay, income, isPerSecond, incomePerSecond, trigger } = tier;
  const [currentDelay, setCurrentDelay] = useState(delay);

  useEffect(() => {
    setCurrentDelay(Math.max(delay, 250));
  }, [trigger]);

  const displayIncome =
    (isPerSecond ? formatNumbers(incomePerSecond) : formatNumbers(income)) +
    (isPerSecond ? " /sec" : " €");

  return (
    <StyledProgressBar>
      <ProgressStars tier={tier} />
      <TierTimer
        delay={currentDelay}
        tier={tier}
        trigger={trigger}
        isFilling={isFilling}
      />
      <StyledWrapper>
        <StyledIncome>{displayIncome}</StyledIncome>
        <PopupText tier={tier} />
        <StyledContainer data-testid="progress-bar">
          {isPerSecond ? (
            <StyledFlowBar>
              <ProgressBarAnimation />
            </StyledFlowBar>
          ) : (
            isFilling && <StyledBar delay={currentDelay} />
          )}
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

  box-shadow: var(--shadow1);
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 248px;
  height: 50px;
`;

const StyledIncome = styled.span`
  position: absolute;
  width: 225px;
  top: 13px;
  left: 21px;
  z-index: 10;
  color: var(--5);
  font-family: var(--font1);
  text-align: center;
  font-size: 1.25rem;
  font-weight: 590;

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

const StyledFlowBar = styled.div`
  background: var(--3);
  width: 100%;
  position: absolute;
  left: -2px;
  height: 30px;
  z-index: 5;
  display: inline-block;
  overflow: hidden;
`;
