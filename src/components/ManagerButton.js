import useStore from "~/src/zustand/store";
import styled from "styled-components";

export default function ManagerButton({ tier }) {
  const { setTier, clickTimer } = useStore();

  function handleHireManager() {
    setTier({
      id: tier.id,
      hasManager: true,
    });
    clickTimer(tier.id);
  }

  return (
    <StyledButton
      disabled={tier.hasManager}
      type="button"
      onClick={handleHireManager}
    >
      Hire Manager
    </StyledButton>
  );
}

const StyledButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 90px;

  z-index: 100;
  width: 50px;
  height: 30px;
  font-size: 10px;
`;
