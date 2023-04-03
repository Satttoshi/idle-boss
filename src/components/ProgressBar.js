import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: aqua;
  width: 400px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledBar = styled.div`
  position: absolute;
  left: 0;
  height: 30px;
  display: inline-block;
  overflow: hidden;
  animation-name: load;
  animation-duration: ${({ speed }) => speed}ms;
  animation-iteration-count: 1;
  animation-timing-function: linear;

  @keyframes load {
    0% {
      width: 0;
      background: green;
    }

    100% {
      width: 100%;
      background: green;
    }
  }
`;

export default function ProgressBar() {
  return (
    <StyledContainer>
      {isActive ? <StyledBar speed={speed} /> : null}
    </StyledContainer>
  );
}
