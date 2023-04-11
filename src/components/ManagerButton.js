import useStore from "~/src/zustand/store";
import styled from "styled-components";

export default function ManagerButton({ tier }) {
  const { buyManager, money } = useStore();

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
      Hire Manager {price} €
    </StyledButton>
  );
}

const StyledButton = styled.button`
  position: absolute;
  bottom: -10px;
  left: 80px;
  cursor: pointer;

  z-index: 100;
  width: 65px;
  height: 38px;
  font-size: 10px;
`;
