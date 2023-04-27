import styled, { keyframes } from "styled-components";
import useStore, { floorPrices } from "~/src/zustand/store";
import Building from "./Building";
import formatNumbers from "~/src/utils/format-numbers";

export default function ConstructionModal() {
  const setConstructionModal = useStore((state) => state.setConstructionModal);
  const availableFloors = useStore((state) => state.availableFloors);
  const unlockFloor = useStore((state) => state.unlockFloor);
  const currentFloorBuilder = useStore((state) => state.currentFloorBuilder);

  function handleConstructionModalClose() {
    setConstructionModal(false);
  }

  function preventClosing(event) {
    event.stopPropagation();
  }

  function handleBuildFloor() {
    try {
      unlockFloor();
    } catch (error) {
      console.error(error.message);
    }
  }

  const currentFloorPrice = floorPrices[currentFloorBuilder];
  const reachedLastFloor = currentFloorBuilder === floorPrices.length;

  return (
    <StyledDimmer onClick={handleConstructionModalClose}>
      <StyledModal onClick={preventClosing}>
        <StyledButton onClick={handleBuildFloor}>Build new Floor!</StyledButton>
        <StyledPrice variant={0}>
          {reachedLastFloor ? "no more" : "Construction price"}
        </StyledPrice>
        <StyledPrice variant={1}>
          {reachedLastFloor ? "floors." : formatNumbers(currentFloorPrice)}
        </StyledPrice>
        <Building availableFloors={availableFloors} />
        <StyledCloseButton type="button" onClick={handleConstructionModalClose}>
          close
        </StyledCloseButton>
      </StyledModal>
    </StyledDimmer>
  );
}

const StyledPrice = styled.span`
  font-family: var(--font1);
  font-weight: 590;
  width: 300px;
  position: absolute;
  bottom: ${(props) => (props.variant === 0 ? "155px" : "125px")};
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: ${(props) => (props.variant === 0 ? "1rem" : "1.4rem")};
`;

const StyledButton = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 65px;
  left: 50%;
  transform: translateX(-50%);

  width: 160px;
  height: 40px;
  border-radius: 10px;
  background-color: var(--1);

  font-family: var(--font1);
  font-weight: 590;
  font-size: 1rem;
  color: var(--5);

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

const StyledDimmer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const ModalPopupAnimation = keyframes`
  from {
    top: 2000px;
  }
  
  to {
    top: 100px;
  }`;

const StyledModal = styled.div`
  position: relative;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);

  width: 317px;
  height: 480px;
  background-color: var(--5);
  border-radius: 25px;

  animation-name: ${ModalPopupAnimation};
  animation-duration: 0.35s;
  animation-timing-function: ease-out;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  appearance: none;
  border: 2px solid var(--1);
  border-radius: 10px;
  cursor: pointer;
  width: 200px;
  height: 28px;

  font-family: var(--font1);
  font-weight: 600;
  font-size: 1rem;
  color: var(--1);
  line-height: 1px;

  @media (hover: hover) {
    &:hover:enabled {
      border-color: var(--3);
      color: var(--3);
    }
  }

  @media (hover: none) {
    &:active:enabled {
      border-color: var(--3);
      color: var(--3);
    }
  }
`;
