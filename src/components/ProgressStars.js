import Star from "~/src/assets/star.svg";
import styled from "styled-components";

export default function ProgressStars({ tier }) {
  const { milestoneIndex } = tier;

  function renderStars() {
    const stars = [];
    for (let i = 0; i < milestoneIndex; i++) {
      stars.push(
        <StyledStar
          key={tier.id + "Star" + i}
          style={{
            "--star-offset": -((i + 1) * 20 + 40) + "px",
          }}
        />
      );
    }
    return stars;
  }

  return <StyledStarContainer>{renderStars()}</StyledStarContainer>;
}

const StyledStar = styled(Star)`
  animation-name: StarAnimation;
  animation-duration: 800ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;

  @keyframes StarAnimation {
    0% {
      opacity: 0.6;
      transform: translateX(var(--star-offset)) translateY(75px) rotate(0deg)
        scale(3);
    }
    100% {
      opacity: 1;
      transform: translateX(0px) translateY(0px) rotate(360deg) scale(1);
    }
  }
`;

const StyledStarContainer = styled.div`
  height: 20px;
  width: 220px;
  z-index: 20;
  position: absolute;
  left: 25px;
  transform: translateY(-10px);
  display: flex;
  gap: 2px;

  svg {
    width: 20px;
    height: 20px;
    fill: #ffd02c;
  }
`;
