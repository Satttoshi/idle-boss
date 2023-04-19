import useStore from "~/src/zustand/store";
import styled from "styled-components";
import formatNumbers from "~/src/utils/format-numbers";

export default function ManagerButton({ tier }) {
  const buyManager = useStore((state) => state.buyManager);
  const money = useStore((state) => state.money);

  const price = tier.unlockPrice * 100;
  const displayPrice = formatNumbers(price);

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
      Hire Manager {displayPrice} €
    </StyledButton>
  );
}

const StyledButton = styled.button`
  position: absolute;
  bottom: -10px;
  left: 80px;
  cursor: pointer;

  width: 65px;
  height: 38px;
  font-size: 8px;

  :disabled {
    cursor: default;
  }
`;
