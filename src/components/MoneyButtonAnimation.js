import Form1 from "~/src/assets/animation/rotate1.svg";
import Form2 from "~/src/assets/animation/rotate2.svg";
import Form3 from "~/src/assets/animation/rotate3.svg";
import styled, { keyframes } from "styled-components";

export default function MoneyButtonAnimation() {
  return (
    <StyledContainer>
      <StyledForm1 />
      <StyledForm2 />
      <StyledForm3 />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  z-index: 15;
  position: absolute;
`;

const StyledForm1 = styled(Form1)`
  position: absolute;
  top: 7px;
  left: 3px;
`;

const StyledForm2 = styled(Form2)`
  position: absolute;
  top: 15px;
  left: 11px;
`;

const StyledForm3 = styled(Form3)`
  position: absolute;
  top: 4px;
  left: 0;
`;
