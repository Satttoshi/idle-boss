import styled from "styled-components";
import useStore from "~/src/zustand/store";

export default function Navigation() {
  const currentFloor = useStore((state) => state.currentFloor);
  const availableFloors = useStore((state) => state.availableFloors);
  const setCurrentFloor = useStore((state) => state.setCurrentFloor);
  const currentBossFloor = availableFloors.length;

  function handleDownstairs() {
    if (currentFloor === 1) {
      return;
    } else {
      setCurrentFloor(-1);
    }
  }

  function handleUpstairs() {
    if (currentFloor === currentBossFloor) {
      return;
    } else {
      setCurrentFloor(1);
    }
  }

  function ordinalSuffix(i) {
    const j = i % 10;
    const k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }

  return (
    <StyledNavigation>
      <button
        type="button"
        disabled={currentFloor === 1}
        onClick={handleDownstairs}
      >
        downstairs
      </button>
      <h3>
        {currentFloor === currentBossFloor
          ? "boss floor"
          : ordinalSuffix(currentFloor) + " floor"}
      </h3>
      <button
        type="button"
        disabled={currentFloor === currentBossFloor}
        onClick={handleUpstairs}
      >
        upstairs
      </button>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 100;
  background-color: var(--5);
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 84px;
    height: 30px;
    border-radius: 5px;
    appearance: none;
    border: none;
    background-color: var(--1);
    color: var(--5);
    font-family: var(--font1);
    font-weight: 600;
    cursor: pointer;
    padding: 0;

    &:disabled {
      background-color: var(--4);
      cursor: default;
    }
  }

  h3 {
    margin: 0;
    width: 164px;
    text-align: center;
    font-family: var(--font2);
  }
`;
