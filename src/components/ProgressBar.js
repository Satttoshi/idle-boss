import styled from "styled-components";

export default function ProgressBar({ tier, isFilling }) {
  const { delay } = tier;

  return (
    <StyledContainer data-testid="progress-bar">
      {isFilling ? <StyledBar delay={delay} /> : null}
    </StyledContainer>
  );
}

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
  animation-duration: ${({ delay }) => delay}ms;
  animation-iteration-count: 1;
  animation-timing-function: linear;

  @keyframes load {
    0% {
      width: 0;
      background: hotpink;
    }

    100% {
      width: 100%;
      background: hotpink;
    }
  }
`;
