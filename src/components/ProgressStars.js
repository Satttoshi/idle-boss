import Star from "~/src/assets/star.svg";
import styled from "styled-components";
import useStore from "../zustand/store";

export default function ProgressStars({ tier }) {
  const { milestoneIndex } = tier;

  function renderStars() {
    const stars = [];
    for (let i = 0; i < milestoneIndex; i++) {
      stars.push(<Star />);
    }
    return stars;
  }

  return <StyledStarContainer>{renderStars()}</StyledStarContainer>;
}

const StyledStarContainer = styled.div`
  height: 20px;
  width: 200px;
  z-index: 20;
  position: absolute;
  left: 28px;
  transform: translateY(-10px);
  display: flex;
  gap: 2px;

  svg {
    width: 20px;
    height: 20px;
    fill: #ffd02c;
  }
`;
