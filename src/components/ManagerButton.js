import useStore from "~/src/zustand/store";
import styled from "styled-components";

export default function ManagerButton({ tier }) {
  const buyManager = useStore((state) => state.buyManager);
  const money = useStore((state) => state.money);

  const price = tier.unlockPrice * 300;

  function handleBuyManager() {
    try {
      buyManager(tier.id);
    } catch (error) {
      // mby implement not enough money popup in a later US
      console.error(error.message);
    }
  }

  return (
    <StyledButton
      disabled={tier.hasManager || money < price}
      type="button"
      onClick={handleBuyManager}
    >
      Hire!
    </StyledButton>
  );
}

const StyledButton = styled.button`
  appearance: none;
  border: none;
  position: absolute;
  bottom: 63px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  background-color: var(--1);

  border-radius: 15px;

  width: 123px;
  height: 44px;

  font-size: 1.2rem;
  font-family: var(--font1);
  font-weight: 600;
  color: var(--5);

  box-shadow: var(--shadow1);

  :disabled {
    cursor: default;
    opacity: 0.3;
  }

  @media (hover: hover) {
    &:hover:enabled {
      background-color: var(--3);
    }
  }

  @media (hover: none) {
    &:active:enabled {
      background-color: var(--3);
    }
  }
`;
