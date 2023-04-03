import styled from "styled-components";
import useStore from "~/src/zustand/store";

const StyledContainer = styled.div`
  background-color: blue;
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
      background: aqua;
    }

    100% {
      width: 100%;
      background: aqua;
    }
  }
`;

export default function ProgressBar() {
  const { tier } = useStore();
  const { isFilling, delay } = tier[0];

  return (
    <StyledContainer>
      {isFilling ? <StyledBar speed={delay} /> : null}
    </StyledContainer>
  );
}
