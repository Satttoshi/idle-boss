import styled from "styled-components";
import useStore, { milestones } from "~/src/zustand/store";

export default function Milestones({ investCount, currentMilestone, tier }) {
  console.log(tier.milestoneIndex);
  function getBarClipPath(investCount, tier, milestones) {
    const previousMilestone =
      tier.milestoneIndex === 0 ? 0 : milestones[tier.milestoneIndex - 1];
    const currentMilestoneDifference =
      milestones[tier.milestoneIndex] - previousMilestone;
    const progress =
      (investCount - previousMilestone) / currentMilestoneDifference;
    const clipPath = `inset(0px ${100 - progress * 100}% 0px 0px)`;
    return clipPath;
  }

  return (
    <StyledBox>
      <h3>{investCount + " / " + currentMilestone}</h3>
      <StyledBar path={getBarClipPath(investCount, tier, milestones)} />
    </StyledBox>
  );
}

const StyledBar = styled.div`
  background-color: var(--4);
  position: absolute;
  width: 62px;
  height: 18px;
  border-radius: 15px;
  transition: clip-path 0.07s ease-in-out;
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
