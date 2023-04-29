import styled, { keyframes } from "styled-components";
import useStore from "~/src/zustand/store";
import { useState, useEffect } from "react";
import formatNumbers from "~/src/utils/format-numbers";

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
  const tiers = useStore((state) => state.tiers);
  const applyIdleEarnings = useStore((state) => state.applyIdleEarnings);

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

  function handleIdleEarnings() {
    applyIdleEarnings(calculateEarnings());
    setGameStartModalActive(false);
    onGameStart();
  }

  const lastTimeDifferenceInSeconds = Math.floor(lastTimeDifference / 1000);

  function calculateEarnings() {
    let earnings = 0;
    const tiersWithActiveManagers = tiers.filter((tier) => tier.hasManager);
    tiersWithActiveManagers.forEach((tier) => {
      const earningsPerTier =
        tier.incomePerSecond * lastTimeDifferenceInSeconds;
      earnings += earningsPerTier;
    });
    return earnings;
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
        ) : lastTimeDifferenceInSeconds < 30 ? (
          <>
            <StyledDescription variant={0}>
              Welcome back {userName},
            </StyledDescription>
            <StyledDescription>
              It{"'"}s nice seeing you again! Let{"'"}s continue building your
              IT empire!
            </StyledDescription>
            <StyledButton onClick={handleGameStart}>{"Let's go!"}</StyledButton>
          </>
        ) : (
          <>
            <StyledDescription variant={0}>
              Welcome back {userName},
            </StyledDescription>
            <StyledDescription>
              Your managers worked hard for you while you were away and earned
              you a total of:
            </StyledDescription>
            <StyledDescription variant={1}>
              {formatNumbers(calculateEarnings()) + " €"}
            </StyledDescription>
            <StyledButton onClick={handleIdleEarnings}>
              {"Let's go!"}
            </StyledButton>
          </>
        )}
      </StyledModal>
    </StyledDimmer>
  );
}

const StyledDescription = styled.p`
  color: ${(props) => (props.variant === 1 ? "var(--3)" : "var(--1)")};
  font-family: var(--font1);
  text-align: center;
  font-size: ${(props) => (props.variant === 1 ? "1.6rem" : "1.4rem")};
  margin: 0;
  font-weight: ${({ variant }) => (variant === 0 || variant === 1 ? 590 : 400)};

  text-shadow: ${({ variant }) =>
    variant === 0 || variant === 1 ? "var(--shadow2)" : "none"};

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
  gap: 15px;

  & > *:first-child {
    padding-top: 50px;
  }
`;
