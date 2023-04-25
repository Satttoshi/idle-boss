import styled from "styled-components";
import Countdown from "react-countdown";
import { useEffect, useState } from "react";
import useStore from "~/src/zustand/store";

// const renderer = ({ days, hours, minutes, seconds, total, completed }) => {
//   function convertTo2Digits(number) {
//     return number < 10 ? `0${number}` : number;
//   }

//   if (completed) {
//     return <StyledCountdown>00 : 00 s</StyledCountdown>;
//   }

//   if (total < 60000) {
//     return <StyledCountdown>0 : {convertTo2Digits(seconds)} s</StyledCountdown>;
//   } else if (total < 3600000) {
//     return (
//       <StyledCountdown>
//         {minutes} : {convertTo2Digits(seconds)} m
//       </StyledCountdown>
//     );
//   } else if (total < 86400000) {
//     return (
//       <StyledCountdown>
//         {hours} : {convertTo2Digits(minutes)} h
//       </StyledCountdown>
//     );
//   } else if (total < 604800000) {
//     return (
//       <StyledCountdown>
//         {days} : {convertTo2Digits(hours)} d
//       </StyledCountdown>
//     );
//   }
// };

// export default function Timer({ delay, isFilling }) {
//   return (
//     <StyledTimer>
//       {isFilling && <Countdown date={Date.now() + delay} renderer={renderer} />}
//     </StyledTimer>
//   );
// }

export default function Timer({ delay, isFilling }) {
  const [timeRemaining, setTimeRemaining] = useState(Math.floor(delay / 1000));

  useEffect(() => {
    let intervalId;

    const tick = () => {
      setTimeRemaining((prevTimeRemaining) => {
        if (prevTimeRemaining === 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTimeRemaining - 1;
      });
    };

    intervalId = setInterval(tick, 1000);

    return () => clearInterval(intervalId);
  }, [timeRemaining]);

  return (
    <StyledTimer>
      {isFilling && <StyledCountdown>{timeRemaining}</StyledCountdown>}
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
