import WordpressIcon from "~/src/assets/tier-logos/wordpress.svg";
import VueIcon from "~/src/assets/tier-logos/vue.svg";
import NextIcon from "~/src/assets/tier-logos/next.svg";
import RubyIcon from "~/src/assets/tier-logos/ruby.svg";
import QuantumIcon from "~/src/assets/tier-logos/quantum.svg";
import UnityIcon from "~/src/assets/tier-logos/unity.svg";
import UnrealIcon from "~/src/assets/tier-logos/unreal.svg";
import CryEngineIcon from "~/src/assets/tier-logos/cryengine.svg";
import CustomEngineIcon from "~/src/assets/tier-logos/customengine.svg";

import styled from "styled-components";

export default function TierLogo({ tierId }) {
  switch (tierId) {
    case "tier1":
      return <WordpressIcon width={48} height={48} fill={"var(--5)"} />;
    case "tier2":
      return (
        <StyledContainer>
          <VueIcon width={48} height={48} fill={"var(--5)"} />
        </StyledContainer>
      );
    case "tier3":
      return (
        <StyledContainer>
          <NextIcon width={48} height={48} fill={"var(--5)"} />
        </StyledContainer>
      );
    case "tier4":
      return <RubyIcon width={48} height={48} fill={"var(--5)"} />;
    case "tier5":
      return <QuantumIcon width={48} height={48} fill={"var(--5)"} />;
    case "tier6":
      return <UnityIcon width={48} height={48} fill={"var(--5)"} />;
    case "tier7":
      return <UnrealIcon width={48} height={48} fill={"var(--5)"} />;
    case "tier8":
      return <CryEngineIcon width={48} height={48} fill={"var(--5)"} />;
    case "tier9":
      return <CustomEngineIcon width={48} height={48} fill={"var(--5)"} />;
    default:
      return <WordpressIcon width={48} height={48} fill={"var(--5)"} />;
  }
}

const StyledContainer = styled.div`
  display: grid;
  place-items: center;
`;
