import NameForm from "./NameForm";
import ThemeSwitch from "./ThemeSwitch";
import Button from "./BossFloorButton";
import { useState } from "react";
import styled from "styled-components";
import Manager from "~/src/assets/manager.svg";
import Tierlogo from "./Tierlogo";

import useStore from "~/src/zustand/store";

function handleClick() {
  alert("You have been hired!");
}

export default function BossFloor() {
  const [isManagerModalOpen, setIsManagerModalOpen] = useState(true);

  const username = useStore((state) => state.username);

  function handleManagerModalClose() {
    setIsManagerModalOpen(false);
  }

  return (
    <>
      <NameForm />
      <ThemeSwitch />
      <Button label="Job Interviews" onClick={handleClick} />
      {isManagerModalOpen && (
        <StyledDimmer>
          <StyledModal>
            <Tierlogo tierId={"tier9"} />
            <StyledManager width="64" height="64" fill="var(--1)" />
            <StyledApplication>
              <StyledArticle>
                <h4>Dear {username}</h4>
                <p>
                  I am a skilled Wordpress Creator Manager with experience in
                  website development, optimization, and customer service. I
                  believe my expertise and passion for Wordpress make me a great
                  fit for your team. Thank you for considering my application.
                </p>
                <span>Sincerely, Herbert</span>
              </StyledArticle>
            </StyledApplication>
          </StyledModal>
        </StyledDimmer>
      )}
    </>
  );
}

const StyledArticle = styled.article`
  padding: 22px;
  font-weight: 400;
  font-size: 0.8rem;

  h4 {
    margin: 0;
    font-weight: 400;
  }
`;

const StyledManager = styled(Manager)`
  position: absolute;
  top: 96px;
  right: 34px;
  z-index: 2;
`;

const StyledApplication = styled.div`
  position: absolute;
  top: 122px;
  left: 50%;
  transform: translateX(-50%);

  width: 290px;
  height: 216px;
  background-color: var(--4);
  border-radius: 15px;

  font-family: var(--font1);

  display: grid;
  place-items: center;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);

  width: 317px;
  height: 480px;
  background-color: var(--5);
  border-radius: 25px;
`;

const StyledDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
