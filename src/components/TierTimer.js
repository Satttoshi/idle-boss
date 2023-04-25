import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Timer({ delay, isFilling }) {
  const [timeRemaining, setTimeRemaining] = useState(Math.floor(delay));

  useEffect(() => {
    let intervalId;

    const tick = () => {
      setTimeRemaining((prevTimeRemaining) => {
        if (prevTimeRemaining === 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTimeRemaining - 1000;
      });
    };

    intervalId = setInterval(tick, 1000);

    return () => clearInterval(intervalId);
  }, [timeRemaining]);

  useEffect(() => {
    setTimeRemaining(Math.floor(delay));
  }, [delay, isFilling]);

  const formatTime = (time) => {
    if (time < 1) return "0s";
    let remainingSeconds = time;
    const days = Math.floor(remainingSeconds / 86400);
    remainingSeconds -= days * 86400;
    const hours = Math.floor(remainingSeconds / 3600) % 24;
    remainingSeconds -= hours * 3600;
    const minutes = Math.floor(remainingSeconds / 60) % 60;
    remainingSeconds -= minutes * 60;
    const seconds = remainingSeconds % 60;
    let formattedTime = "";
    if (days > 0) formattedTime += `${days}d `;
    if (hours > 0) formattedTime += `${hours}h `;
    if (minutes > 0) formattedTime += `${minutes}m `;
    if (seconds > 0) formattedTime += `${seconds}s`;
    return formattedTime.trim();
  };

  return (
    <StyledTimer>
      {isFilling && (
        <StyledCountdown>
          {formatTime(Math.floor(timeRemaining / 1000))}
        </StyledCountdown>
      )}
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
