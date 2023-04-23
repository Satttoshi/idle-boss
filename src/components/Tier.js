import MoneyButton from "./MoneyButton";
import ProgressBar from "./ProgressBar";
import useStore, { milestones } from "~/src/zustand/store";
import InvestButton from "./InvestButton";
import Milestones from "./Milestones";

import Lottie from "lottie-react";
import animationData from "~/src/assets/animation/unlock.json";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

export default function Tier({ currentTier }) {
  const money = useStore((state) => state.money);
  const invest = useStore((state) => state.invest);
  const clickTimer = useStore((state) => state.clickTimer);
  const { investCount, investPrice, milestoneIndex } = currentTier;

  const lottieRef = useRef();

  const [isLottieVisible, setIsLottieVisible] = useState(true);

  function handleMoneyButtonClick() {
    clickTimer(currentTier.id);
  }

  function handleInvest() {
    try {
      invest(currentTier.id);
    } catch (error) {
      // mby implement not enough money popup in a later US
      console.error(error.message);
    }
  }

  useEffect(() => {
    const lottie = lottieRef.current;
    lottie?.setSpeed(2);
    setTimeout(() => {
      lottie?.destroy();
      setIsLottieVisible(false);
    }, 1000);
  }, []);

  return (
    <>
      {currentTier.index !== 1 && isLottieVisible && (
        <StyledLottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
        />
      )}
      <MoneyButton
        onMoneyButtonClick={handleMoneyButtonClick}
        tier={currentTier}
      />
      <ProgressBar isFilling={currentTier.isFilling} tier={currentTier} />

      <Milestones
        investCount={investCount}
        currentMilestone={milestones[milestoneIndex]}
        tier={currentTier}
      />
      <InvestButton
        onInvest={handleInvest}
        money={money}
        investPrice={investPrice}
      />
    </>
  );
}

const StyledLottie = styled(Lottie)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  z-index: 40;
`;
