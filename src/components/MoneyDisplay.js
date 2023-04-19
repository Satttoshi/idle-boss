import useStore from "~/src/zustand/store";
import styled from "styled-components";
import ThemeSwitch from "./ThemeSwitch";

export default function MoneyDisplay() {
  const money = useStore((state) => state.money);
  const username = useStore((state) => state.username);

  function largeNumberNamingScaling(money) {
    if (money < 100000000) {
      return (
        money.toLocaleString("de-DE", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) + " €"
      );
    }

    const moneyString = Math.floor(money).toString();

    if (moneyString.length > 32) {
      return moneyString.slice(0, moneyString.length - 30) + " Decillion";
    } else if (moneyString.length > 29) {
      return moneyString.slice(0, moneyString.length - 27) + " Nonillion";
    } else if (moneyString.length > 26) {
      return moneyString.slice(0, moneyString.length - 24) + " Septillion";
    } else if (moneyString.length > 23) {
      return moneyString.slice(0, moneyString.length - 21) + " Sextillion";
    } else if (moneyString.length > 20) {
      return moneyString.slice(0, moneyString.length - 18) + " Quintillion";
    } else if (moneyString.length > 17) {
      return moneyString.slice(0, moneyString.length - 15) + " Quadrillion";
    } else if (moneyString.length > 14) {
      return moneyString.slice(0, moneyString.length - 12) + " Trillion";
    } else if (moneyString.length > 11) {
      return moneyString.slice(0, moneyString.length - 9) + " Billion";
    } else if (moneyString.length > 8) {
      return moneyString.slice(0, moneyString.length - 6) + " Million";
    } else {
      return moneyString;
    }
  }

  const convertedMoney = largeNumberNamingScaling(money);

  return (
    <StyledHeader>
      <div>
        <h2>{username}</h2>
        <h1>{convertedMoney}</h1>
      </div>
      <ThemeSwitch />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: var(--5);
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    transform: translateX(30px);
  }

  h1 {
    font-family: var(--font2);
    color: var(--3);
    margin: 0;
    width: 280px;
    font-weight: 400;
    font-size: 1.7rem;
  }

  h2 {
    font-family: var(--font1);
    margin: 0;
    font-weight: 400;
    font-size: 0.8rem;
  }
`;
