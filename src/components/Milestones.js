import styled from "styled-components";
import { useState } from "react";

export default function Milestones({ investCount }) {
  const milestones = [15, 30, 50, 75, 100, 200, "max"];
  const [selector, setSelector] = useState(0);

  if (investCount >= milestones[selector] && selector < milestones.length - 1) {
    setSelector(selector + 1);
  }

  return (
    <StyledBox>
      <h3>{investCount + " / " + milestones[selector]}</h3>
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
