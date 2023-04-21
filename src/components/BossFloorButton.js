import styled from "styled-components";

export default function Button({ label, onClick }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {label}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;

  background: var(--1);
  color: var(--5);
  width: 215px;
  height: 40px;
  margin: 10px 80px 10px 80px;
  border-radius: 10px;

  font-family: var(--font1);
  font-size: 1rem;
  font-weight: 600;
`;
