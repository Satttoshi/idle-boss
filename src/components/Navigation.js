import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const { index } = router.query;
  const currentPath = router.pathname;

  function handleDownstairs() {
    if (currentPath === "/boss-floor") {
      router.push("/floor/2");
    } else if (index === "1") {
      return;
    } else {
      router.push(`/floor/${parseInt(index, 10) - 1}`);
    }
  }

  function handleUpstairs() {
    if (currentPath === "/boss-floor") {
      return;
    } else if (index === "2") {
      router.push("/boss-floor");
    } else {
      router.push(`/floor/${parseInt(index, 10) + 1}`);
    }
  }

  function ordinalSuffix(i) {
    const j = i % 10;
    const k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }

  return (
    <StyledNavigation>
      <button type="button" disabled={index === "1"} onClick={handleDownstairs}>
        downstairs
      </button>
      <h3>
        {currentPath === "/boss-floor"
          ? "boss floor"
          : ordinalSuffix(index) + " floor"}
      </h3>
      <button
        type="button"
        disabled={currentPath === "/boss-floor"}
        onClick={handleUpstairs}
      >
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

    &:disabled {
      background-color: var(--4);
      cursor: default;
    }
  }

  h3 {
    margin: 0;
    width: 164px;
    text-align: center;
    font-family: var(--font2);
  }
`;
