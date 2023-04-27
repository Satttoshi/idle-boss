import useStore from "~/src/zustand/store";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function NavigationButton({ variant }) {
  const currentFloor = useStore((state) => state.currentFloor);
  const availableFloors = useStore((state) => state.availableFloors);
  const setCurrentFloor = useStore((state) => state.setCurrentFloor);
  const currentBossFloor = availableFloors.length;

  const exitTutorial = useStore((state) => state.exitTutorial);
  const currentTutorial = useStore((state) => state.currentTutorial);

  const router = useRouter();

  function handleDownstairs() {
    if (currentFloor === 1) {
      return;
    } else {
      router.push(`/floor/${currentFloor - 1}`);
      setCurrentFloor(-1);
    }
  }

  function handleUpstairs() {
    if (currentTutorial === 3) {
      exitTutorial();
    }
    if (currentFloor === currentBossFloor) {
      return;
    } else {
      if (currentFloor + 1 === currentBossFloor) {
        router.push(`/floor/executive`);
      } else {
        router.push(`/floor/${currentFloor + 1}`);
      }
      setCurrentFloor(1);
    }
  }

  if (variant === 0) {
    return (
      <button
        type="button"
        disabled={currentFloor === 1}
        onClick={handleDownstairs}
      >
        downstairs
      </button>
    );
  }

  if (variant === 1) {
    return (
      <button
        type="button"
        disabled={currentFloor === currentBossFloor || currentTutorial < 3}
        onClick={handleUpstairs}
      >
        upstairs
      </button>
    );
  }

  if (variant === 2) {
    return (
      <StyledButton type="button" onClick={handleUpstairs}>
        upstairs
      </StyledButton>
    );
  }
}

const StyledButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 84px;
  height: 30px;
  border-radius: 5px;
  appearance: none;
  border: none;
  background-color: var(--1);
  color: var(--5);
  font-family: var(--font1);
  font-size: 0.8rem;
  font-weight: 590;
  cursor: pointer;
  padding: 0;
  box-shadow: var(--shadow2);
  z-index: 10;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:disabled {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: default;
  }

  @media (hover: hover) {
    &:hover:enabled {
      background-color: var(--3);
    }
  }

  @media (hover: none) {
    &:active:enabled {
      background-color: var(--3);
    }
  }
`;
