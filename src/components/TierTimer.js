import styled from "styled-components";
import Countdown from "react-countdown";

export default function Timer() {
  return (
    <StyledTimer>
      <StyledNumber>0</StyledNumber>
      <StyledSymbol>:</StyledSymbol>
      <StyledNumber>00</StyledNumber>
      <StyledSymbol>s</StyledSymbol>
    </StyledTimer>
  );
}

const StyledTimer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 80px;

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
