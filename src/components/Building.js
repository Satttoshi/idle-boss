import styled, { keyframes } from "styled-components";
import ordinalSuffix from "~/src/utils/ordinal-suffix";

export default function Building({ availableFloors }) {
  function renderFloors() {
    const floors = [];
    for (let i = availableFloors.length; i > 0; i--) {
      i === availableFloors.length
        ? floors.push(<StyledFloor key={"floor" + i}>BOSS FLOOR</StyledFloor>)
        : floors.push(
            <StyledFloor key={"floor" + i}>
              {ordinalSuffix(i) + " floor"}
            </StyledFloor>
          );
    }
    return floors;
  }

  return (
    <StyledFloorContainer>
      <StyledRoof availableFloors={availableFloors}>
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
  0% {
    transform: translateY(40px);
    }  
    35% {
    transform: translateY(40px);
    }
    100% {
    transform: translateY(0);
    }
`;

const StyledFloor = styled.div`
  width: 200px;
  height: 30px;
  min-height: 30px;
  border: 3px solid var(--1);
  border-radius: 5px;
  background-color: var(--6);

  font-family: var(--font1);
  font-weight: 490;
  font-size: 0.8rem;
  color: var(--1);

  margin: 5px 0 5px 0;

  display: grid;
  place-items: center;

  animation: ${FlexAnimation} 0.6s ease-out 1;
`;

const StyledRoof = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 220px;
  height: ${(props) => props.availableFloors.length * 40}px;
  transition: height 0.5s ease-out;
  background-color: var(--4);
  z-index: -1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

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
