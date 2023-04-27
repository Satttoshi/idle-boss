import styled, { keyframes } from "styled-components";
import { useState } from "react";

export default function Building({ availableFloors }) {
  const [wasAnimationPlayed, setWasAnimationPlayed] = useState(false);
  function renderFloors() {
    const floors = [];
    for (let i = availableFloors.length; i > 0; i--) {
      floors.push(
        <StyledFloor asAnimationPlayed={wasAnimationPlayed} key={"floor" + i}>
          {i}
        </StyledFloor>
      );
    }
    return floors;
  }

  return (
    <StyledFloorContainer>
      <StyledRoof>
        {renderFloors()}
        <StyledTriangle />
      </StyledRoof>
    </StyledFloorContainer>
  );
}

const ContainerSpawnAnimation = keyframes`
    0% {
    opacity: 0;
    }
    50% {
    opacity: 0;
    }
    100% {
    opacity: 1;
    }
`;

const StyledFloorContainer = styled.div`
  position: absolute;
  top: 260px;
  left: 50%;
  transform: translateX(-50%);

  animation: ${ContainerSpawnAnimation} 1s linear 1;
`;

const FlexAnimation = keyframes`
  from {
    transform: translateY(30px);
    }
    to {
    transform: translateY(0);
    }
`;

const StyledFloor = styled.div`
  width: 200px;
  height: 30px;
  border: 3px solid var(--1);
  border-radius: 5px;
  background-color: var(--6);

  font-family: var(--font1);
  font-weight: 490;
  font-size: 0.8rem;
  color: var(--1);

  display: grid;
  place-items: center;
  margin: 5px 0 5px 0;

  animation: ${FlexAnimation} 0.5s linear 1;
`;

const StyledRoof = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 220px;
  background-color: var(--4);
  z-index: -1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: height 1s linear 1;
`;

const StyledTriangle = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 110px solid transparent;
  border-right: 110px solid transparent;
  border-bottom: 50px solid var(--4);
`;
