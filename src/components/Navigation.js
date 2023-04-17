import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNavigation>
      <h3>LOLOLOL</h3>
      <button type="button">LOL</button>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  background-color: var(--5);
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
