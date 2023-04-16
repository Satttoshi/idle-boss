import styled from "styled-components";

export default function Milestones({ investCount, currentMilestone }) {
  return (
    <StyledBox>
      <h3>{investCount + " / " + currentMilestone}</h3>
      <StyledBar path={getBarClipPath(investCount, currentMilestone)} />
    </StyledBox>
  );
}

function getBarClipPath(investCount, currentMilestone) {
  const progress = investCount / currentMilestone;
  const clipPath = `inset(0px ${62 - progress * 62}% 0px 0px)`;
  return clipPath;
}

const StyledBar = styled.div`
  background-color: var(--4);
  position: absolute;
  width: 62px;
  height: 18px;
  border-radius: 15px;
  clip-path: ${({ path }) => path};
`;

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
    font-weight: 600;
    margin: 0;
    z-index: 20;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
