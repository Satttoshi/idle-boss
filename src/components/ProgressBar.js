import styled from "styled-components";

export default function ProgressBar({ tier, isFilling }) {
  const { delay, income } = tier;

  return (
    <StyledWrapper>
      <StyledIncome>{income + " €"}</StyledIncome>
      <StyledContainer data-testid="progress-bar">
        {isFilling ? <StyledBar delay={delay} /> : null}
      </StyledContainer>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 50px;
`;

const StyledIncome = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-right: 1rem;
  z-index: 10;
`;

const StyledContainer = styled.div`
  background-color: aqua;
  width: 400px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px;
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
