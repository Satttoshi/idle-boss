import styled from "styled-components";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <StyledMain>
        <h1>IDLE BOSS</h1>
      </StyledMain>
      <StyledSection>
        <button type="button" onClick={() => router.push("/floor/1")}>
          ENTER
        </button>
        <span>idle boss - version 0.0.27</span>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 284px;
  border-radius: 50px 50px 0 0;
  background-color: var(--5);

  button {
    appearance: none;
    border: none;
    position: absolute;
    width: 220px;
    height: 90px;
    border-radius: 20px;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: var(--font1);
    font-weight: 700;
    font-size: 40px;
    color: var(--5);
  }

  span {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--font2);
    font-weight: 400;
    font-size: 0.6rem;
    color: var(--1);
  }
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  z-index: 100;
  align-items: center;
  padding-top: 94px;
  overflow-y: auto;

  h1 {
    margin: 0;
    font-family: var(--font2);
    font-weight: 400;
    font-size: 40px;
  }
`;
