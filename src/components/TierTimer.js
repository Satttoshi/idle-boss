import styled from "styled-components";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, total, completed }) => {
  function convertTo2Digits(number) {
    return number < 10 ? `0${number}` : number;
  }

  if (completed) {
    return <StyledCountdown>00 : 00 s</StyledCountdown>;
  }

  if (total < 60000) {
    return <StyledCountdown>0 : {convertTo2Digits(seconds)} s</StyledCountdown>;
  } else if (total < 3600000) {
    return (
      <StyledCountdown>
        {minutes} : {convertTo2Digits(seconds)} s
      </StyledCountdown>
    );
  } else if (total < 86400000) {
    return (
      <StyledCountdown>
        {hours} : {convertTo2Digits(minutes)} m
      </StyledCountdown>
    );
  } else if (total < 604800000) {
    return (
      <StyledCountdown>
        {days} : {convertTo2Digits(hours)} h
      </StyledCountdown>
    );
  }
};

export default function Timer({ delay, isFilling }) {
  return (
    <>
      <StyledTimer>
        {isFilling ? (
          <Countdown date={Date.now() + delay} renderer={renderer} />
        ) : null}
      </StyledTimer>
    </>
  );
}

const StyledCountdown = styled.span`
  font-family: var(--font1);
  font-weight: 500;
  font-size: 0.8rem;
  word-spacing: -1px;
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

const StyledNumber = styled.span`
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const StyledSymbol = styled.span`
  font-size: 0.7rem;
  transform: translateY(-3%);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
