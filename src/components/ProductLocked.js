import styled from "styled-components";

export default function ProductLocked() {
  return (
    <StyledButton
      type="button"
      onClick={() => {
        console.log("pressed");
      }}
    >
      <h2>Product Locked</h2>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 75px;
  width: 500px;
`;
