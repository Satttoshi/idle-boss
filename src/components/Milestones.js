import styled from "styled-components";

export default function Milestones({ investCount }) {
  return (
    <StyledBox>
      <h3>{investCount + "/ 15"}</h3>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 40px;
  display: grid;
  place-items: center;

  h3 {
    margin: 0;
  }
`;
