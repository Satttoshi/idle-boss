import styled from "styled-components";

export default function InvestButton({ onInvest, money, investPrice }) {
  return (
    <StyledButton
      type="button"
      disabled={money < investPrice}
      onClick={() => {
        onInvest();
      }}
    >
      {"Invest! price: " + investPrice + " €"}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 40px;
  width: 170px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    background-color: hotpink;
  }
`;
