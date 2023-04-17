import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const { floor } = router.query;

  return (
    <StyledNavigation>
      <button type="button" onClick={() => router.push("/")}>
        downstairs
      </button>
      <h3>1st floor</h3>
      <button type="button" onClick={() => console.log(floor)}>
        upstairs
      </button>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 100;
  background-color: var(--5);
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 84px;
    height: 30px;
    border-radius: 5px;
    appearance: none;
    border: none;
    background-color: var(--1);
    color: var(--5);
    font-family: var(--font1);
    font-weight: 600;
    cursor: pointer;
    padding: 0;
  }

  h3 {
    margin: 0;
    width: 164px;
    text-align: center;
    font-family: var(--font2);
  }
`;
