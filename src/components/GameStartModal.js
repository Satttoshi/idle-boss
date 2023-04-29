import styled, { keyframes } from "styled-components";
import useStore from "~/src/zustand/store";
import { useState, useEffect } from "react";

export default function GameStart() {
  const [isLoading, setIsLoading] = useState(true);
  const setGameStartModalActive = useStore(
    (state) => state.setGameStartModalActive
  );
  const onGameStart = useStore((state) => state.onGameStart);
  const userName = useStore((state) => state.username);
  const isFreshStart = useStore((state) => state.isFreshStart);
  const loadGame = useStore((state) => state.loadGame);
  const lastTimeDifference = useStore((state) => state.lastTimeDifference);

  useEffect(() => {
    setIsLoading(false);
    loadGame();
  }, [loadGame]);

  if (isLoading) {
    return null;
  }

  function preventClosing(event) {
    event.stopPropagation();
  }

  function handleGameStart() {
    setGameStartModalActive(false);
    onGameStart();
  }

  return (
    <StyledDimmer onClick={handleGameStart}>
      <StyledModal onClick={preventClosing}>
        {isFreshStart ? (
          <>
            <StyledDescription variant={0}>
              Welcome {userName},
            </StyledDescription>
            <StyledDescription>
              to your own IT company where you can build and sell your amazing
              tech apps and products!
            </StyledDescription>
            <StyledButton onClick={handleGameStart}>{"Let's go!"}</StyledButton>
          </>
        ) : (
          <>
            <StyledDescription variant={0}>
              Welcome back {userName},{lastTimeDifference}
            </StyledDescription>
            <StyledDescription>
              It{"'"}s nice seeing you again! Let{"'"}s continue building your
              IT empire!
            </StyledDescription>
            <StyledButton onClick={handleGameStart}>{"Let's go!"}</StyledButton>
          </>
        )}
      </StyledModal>
    </StyledDimmer>
  );
}

const StyledDescription = styled.p`
  color: var(--1);
  font-family: var(--font1);
  text-align: center;
  font-size: 1.4rem;
  margin: 0;
  font-weight: ${(props) => (props.variant === 0 ? 590 : 400)};

  padding: 0 20px;

  width: 300px;
`;

const StyledButton = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;

  height: 60px;
  border-radius: 10px;
  background-color: var(--1);
  padding: 0 30px;
  margin: 40px auto 20px auto;

  font-family: var(--font1);
  font-weight: 590;
  font-size: 1.5rem;
  color: var(--5);

  box-shadow: var(--shadow1);

  :disabled {
    cursor: default;
    opacity: 0.3;
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

const fadeIn = keyframes`
  0% {
    opacity: 0;
    }
  100% {
    opacity: 1;
    }
      `;

const StyledDimmer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;

  animation: ${fadeIn} 0.5s ease-in-out;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & > *:first-child {
    padding-top: 50px;
  }
`;
