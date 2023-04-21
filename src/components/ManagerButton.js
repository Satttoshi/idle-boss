import useStore from "~/src/zustand/store";
import styled from "styled-components";
import formatNumbers from "~/src/utils/format-numbers";

export default function ManagerButton({ tier }) {
  const buyManager = useStore((state) => state.buyManager);
  const money = useStore((state) => state.money);

  const price = tier.unlockPrice * 100;

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
  bottom: 33px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  border-radius: 15px;

  width: 123px;
  height: 44px;

  font-size: 1rem;
  font-family: var(--font1);
  font-weight: 600;
  color: var(--5);

  :disabled {
    cursor: default;
  }
`;
