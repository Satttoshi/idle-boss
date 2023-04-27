import styled from "styled-components";

export default function Building() {
  return (
    <StyledFloorContainer>
      <StyledFloor>Boss Floor</StyledFloor>
      <StyledFloor>2nd Floor</StyledFloor>
      <StyledFloor>1st Floor</StyledFloor>
      <StyledRoof>
        <StyledTriangle />
      </StyledRoof>
    </StyledFloorContainer>
  );
}

const StyledFloorContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const StyledFloor = styled.div`
  width: 200px;
  height: 30px;
  border: 3px solid var(--1);
  border-radius: 5px;
  background-color: var(--6);

  font-family: var(--font1);
  font-weight: 490;
  font-size: 0.8rem;
  color: var(--1);

  display: grid;
  place-items: center;
`;

const StyledRoof = styled.div`
  position: absolute;
  width: 220px;
  height: 130px;
  background-color: var(--4);
  z-index: -1;
`;

const StyledTriangle = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 110px solid transparent;
  border-right: 110px solid transparent;
  border-bottom: 50px solid var(--4);
`;
