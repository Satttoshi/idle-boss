import styled from "styled-components";
import { useEffect, useState } from "react";
import useStore from "~/src/zustand/store";

export default function Timer({ settedDelay, trigger, isFilling, delay }) {
  const [timeRemaining, setTimeRemaining] = useState(settedDelay);

  const triggerState = trigger;
  const delayInSeconds = Math.floor(delay / 1000);
  const delayInMillis = delay;

  useEffect(() => {
    let intervalId;

    const tick = () => {
      setTimeRemaining((prevTimeRemaining) => {
        if (prevTimeRemaining === 0) {
          clearInterval(intervalId);
          return 0;
        }
        if (!isFilling) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTimeRemaining - 1000;
      });
    };

    intervalId = setInterval(tick, 1000);

    return () => clearInterval(intervalId);
  }, [timeRemaining, triggerState, isFilling]);

  useEffect(() => {
    setTimeRemaining(Math.floor(settedDelay));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilling]);

  const formatTime = (time) => {
    if (delayInMillis <= 1000) return (delayInMillis / 1000).toFixed(1) + "s";

    let remainingSeconds = time;

    const days = Math.floor(remainingSeconds / 86400);
    remainingSeconds -= days * 86400;
    const hours = Math.floor(remainingSeconds / 3600) % 24;
    remainingSeconds -= hours * 3600;
    const minutes = Math.floor(remainingSeconds / 60) % 60;
    remainingSeconds -= minutes * 60;
    const seconds = remainingSeconds % 60;

    const stringArray = [];
    if (seconds > 0) stringArray.unshift(`${seconds}s`);
    if (minutes > 0) stringArray.unshift(`${minutes}m `);
    if (hours > 0) {
      stringArray.unshift(`${hours}h `);
      stringArray.pop();
    }
    if (days > 0) {
      stringArray.unshift(`${days}d `);
      stringArray.pop();
    }
    const formattedTime = stringArray.join("");

    return formattedTime.trim();
  };

  const timeRemainingInSeconds = Math.floor(timeRemaining / 1000);

  return isFilling ? (
    <StyledTimer>
      <StyledCountdown>
        {formatTime(Math.floor(timeRemainingInSeconds))}
      </StyledCountdown>
    </StyledTimer>
  ) : (
    <StyledTimer>
      <StyledCountdown>
        {formatTime(Math.floor(delayInSeconds))}
      </StyledCountdown>
    </StyledTimer>
  );
}

const StyledCountdown = styled.span`
  font-family: var(--font1);
  font-weight: 500;
  font-size: 0.8rem;
  word-spacing: -1px;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const StyledTimer = styled.div`
  position: absolute;
  bottom: -36px;
  left: 21px;

  width: 66px;
  height: 28px;
  border-radius: 17px;
  background-color: var(--4);
  border: 3px solid var(--5);
  color: var(--5);
  font-family: var(--font1);
  font-weight: 500;
  font-size: 0.8rem;
  box-shadow: var(--shadow1);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;
