import useStore from "~/src/zustand/store";
import styled from "styled-components";
import formatNumbers from "~/src/utils/format-numbers";

export default function MoneyDisplay() {
  const money = useStore((state) => state.money);
  const username = useStore((state) => state.username);

  const formattedMoney = formatNumbers(money);

  return (
    <StyledHeader>
      <div>
        <h2>{username}</h2>
        <h1>{formattedMoney + " €"}</h1>
      </div>
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
  box-shadow: var(--shadow2);

  div {
    transform: translateX(30px);
  }

  h1 {
    font-family: var(--font2);
    color: var(--3);
    margin: 0;
    width: 290px;
    font-weight: 400;
    font-size: 1.7rem;
    text-shadow: var(--shadow2);
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  h2 {
    font-family: var(--font1);
    margin: 0;
    font-weight: 500;
    font-size: 0.9rem;
    text-shadow: var(--shadow2);
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
