import useStore from "~/src/zustand/store";
import styled from "styled-components";

export default function MoneyDisplay() {
  const { money } = useStore();

  const moneyString =
    money.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " €";

  return (
    <div>
      <StyledHeader>Money: {moneyString}</StyledHeader>
    </div>
  );
}

const StyledHeader = styled.h1`
  font-family: var(--font1);
`;
