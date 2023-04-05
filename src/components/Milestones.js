import styled from "styled-components";

export default function Milestones({ investCount, currentMilestone }) {
  return (
    <StyledBox>
      <h3>{investCount + " / " + currentMilestone}</h3>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 5px;

  h3 {
    margin: 0;
  }
`;
