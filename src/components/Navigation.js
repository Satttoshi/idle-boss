import styled from "styled-components";
import NavigationButton from "./NavigationButton";
import useStore from "~/src/zustand/store";
import ordinalSuffix from "~/src/utils/ordinal-suffix";

export default function Navigation() {
  const currentFloor = useStore((state) => state.currentFloor);
  const availableFloors = useStore((state) => state.availableFloors);
  const currentBossFloor = availableFloors.length;

  return (
    <StyledNavigation>
      <NavigationButton variant={0} />
      <h3>
        {currentFloor === currentBossFloor
          ? "boss floor"
          : ordinalSuffix(currentFloor) + " floor"}
      </h3>
      <NavigationButton variant={1} />
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
    font-size: 0.8rem;
    font-weight: 590;
    cursor: pointer;
    padding: 0;
    box-shadow: var(--shadow2);

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
  }

  h3 {
    margin: 0;
    width: 164px;
    text-align: center;
    font-family: var(--font2);
    text-shadow: var(--shadow2);

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
