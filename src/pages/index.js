import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import WalletConnect from "~/src/components/WalletConnect";
import { useAccount } from "wagmi";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isConnected } = useAccount();

  function handleButtonClick() {
    if (!isConnected) {
      setIsModalOpen(true);
    } else {
      router.push("/floor/1");
    }
  }

  function handleModalSubmit() {
    setIsModalOpen(false);
    router.push("/floor/1");
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  const router = useRouter();
  return (
    <>
      <StyledMain>
        <h1>IDLE BOSS</h1>
      </StyledMain>
      <StyledSection>
        <StyledButton type="button" onClick={handleButtonClick}>
          ENTER
        </StyledButton>
        {isModalOpen && (
          <StyledDimmer onClick={handleModalClose}>
            <StyledModal>
              <p>
                Your wallet is currently not connected, Game Progress won
                {"'"}t be saved!
              </p>
              <button type="button" onClick={handleModalSubmit}>
                I do understand. Let me in.
              </button>
            </StyledModal>
          </StyledDimmer>
        )}
        <WalletConnect />
        <span>idle boss - version 0.2.27</span>
      </StyledSection>
    </>
  );
}

const ModalPopupAnimation = keyframes`
  from {
    bottom: -200px;
  }
  
  to {
    bottom: 260px;
  }`;

const StyledDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const StyledModal = styled.div`
  position: fixed;
  left: 50%;
  bottom: 260px;
  transform: translateX(-50%);
  width: 80%;
  height: 180px;
  background-color: var(--5);
  border-radius: 50px;
  z-index: 1;
  animation-name: ${ModalPopupAnimation};
  animation-duration: 0.35s;
  animation-timing-function: ease-out;

  p {
    position: absolute;
    margin: 0;
    top: 30px;
    left: 50%;
    width: 200px;
    transform: translateX(-50%);
    font-family: var(--font1);
    font-weight: 500;
    text-align: center;
  }

  button {
    position: absolute;
    appearance: none;
    border: none;
    cursor: pointer;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);

    font-family: var(--font1);
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--5);

    :hover {
      background-color: var(--3);
    }
  }
`;

const StyledSection = styled.section`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 280px;
  border-radius: 50px 50px 0 0;
  background-color: var(--5);

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

const StyledButton = styled.button`
  appearance: none;
  border: none;
  position: absolute;
  cursor: pointer;
  width: 220px;
  height: 90px;
  border-radius: 20px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: var(--font1);
  font-weight: 700;
  font-size: 40px;
  color: var(--5);
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
