import MoneyButton from "./MoneyButton";
import ProgressBar from "./ProgressBar";
import useStore from "~/src/zustand/store";
import { useState } from "react";
import styled from "styled-components";

export default function Product() {
  const { addMoney, tier } = useStore();
  const [isFilling, changeFilling] = useState(false);
  const delay = 3000;

  function handleChangeFilling() {
    changeFilling((prev) => !prev);
  }

  return (
    <>
      <MoneyButton
        addMoney={addMoney}
        tier={tier[0]}
        isFilling={isFilling}
        changeFilling={handleChangeFilling}
      />
      <StyledContainer>
        {isFilling ? <StyledBar delay={delay} /> : null}
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  background-color: aqua;
  width: 400px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledBar = styled.div`
  position: absolute;
  left: 0;
  height: 30px;
  display: inline-block;
  overflow: hidden;
  animation-name: load;
  animation-duration: ${({ delay }) => delay}ms;
  animation-iteration-count: 1;
  animation-timing-function: linear;

  @keyframes load {
    0% {
      width: 0;
      background: hotpink;
    }

    100% {
      width: 100%;
      background: hotpink;
    }
  }
`;
