import styled from "styled-components";

export default function Milestones({ investCount, currentMilestone }) {
  return (
    <StyledBox>
      <h3>{investCount + " / " + currentMilestone}</h3>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  background-color: var(--5);
  color: var(--1);
  font-family: var(--font1);
  font-size: 0.7rem;

  position: absolute;
  bottom: 0;
  left: 6px;
  border-radius: 15px;
  z-index: 15;
  width: 68px;
  height: 24px;

  display: grid;
  place-items: center;

  h3 {
    margin: 0;
  }
`;
