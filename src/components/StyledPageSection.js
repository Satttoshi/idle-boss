import styled from "styled-components";
import useStore from "~/src/zustand/store";

export default function StyledPageSection({ children, floor }) {
  const currentTutorialStep = useStore((state) => state.currentTutorial);

  let scrollBehavior = "scroll";

  if (currentTutorialStep < 3) {
    scrollBehavior = "hidden";
  }

  return (
    <StyledSection scrollBehavior={scrollBehavior} floor={floor}>
      {children}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  position: absolute;
  top: ${({ floor }) => floor};
  left: 50%;
  transform: translateX(-50%);
  height: 527px;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  transition: top 0.5s ease-in-out;
  overflow: ${({ scrollBehavior }) => scrollBehavior};

  @media (min-height: 740px) {
    height: 600px;
  }

  @media (min-height: 770px) {
    height: 700px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
