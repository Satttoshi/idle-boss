import styled, { keyframes } from "styled-components";
import useStore from "~/src/zustand/store";

export default function ApprovalModal() {
  const setApprovalModalOpen = useStore((state) => state.setApprovalModalOpen);

  function handleModalClose() {
    setApprovalModalOpen(false);
  }
  function handleModalSubmit() {
    setApprovalModalOpen(false);
    localStorage.removeItem("game");
    location.reload();
  }

  return (
    <StyledDimmer onClick={handleModalClose}>
      <StyledModal>
        <p>
          Are you certain you wish to delete your current progress? This action
          will result in the permanent removal of your progress.
        </p>
        <StyledButton type="button" onClick={handleModalSubmit}>
          Yes, I do.
        </StyledButton>
        <StyledCloseButton type="button" onClick={handleModalClose}>
          close
        </StyledCloseButton>
      </StyledModal>
    </StyledDimmer>
  );
}

const ModalPopupAnimation = keyframes`
  from {
    bottom: -200px;
  }
  
  to {
    bottom: 200px;
  }`;

const StyledDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const StyledModal = styled.div`
  position: fixed;
  left: 50%;
  bottom: 200px;
  transform: translateX(-50%);
  width: 300px;
  height: 280px;
  background-color: var(--5);
  border-radius: 50px;
  z-index: 1;
  animation-name: ${ModalPopupAnimation};
  animation-duration: 0.35s;
  animation-timing-function: ease-out;

  p {
    position: absolute;
    margin: 0;
    top: 30px;
    left: 50%;
    width: 200px;
    transform: translateX(-50%);
    font-family: var(--font1);
    font-weight: 500;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  appearance: none;
  border: none;
  cursor: pointer;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);

  font-family: var(--font1);
  background-color: var(--1);
  font-weight: 550;
  font-size: 0.9rem;
  color: var(--5);
  box-shadow: var(--shadow1);

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
  box-shadow: var(--shadow1);

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
