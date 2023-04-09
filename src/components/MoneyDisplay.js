import useStore from "~/src/zustand/store";
import styled from "styled-components";
import ThemeSwitch from "./ThemeSwitch";

export default function MoneyDisplay() {
  const { money } = useStore();

  const moneyString =
    money.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " €";

  return (
    <StyledHeader>
      <div>
        <h2>Username</h2>
        <h1>{moneyString}</h1>
      </div>
      <ThemeSwitch />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
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
