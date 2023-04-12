import WordpressIcon from "~/src/assets/tier-logos/wordpress.svg";
import VueIcon from "~/src/assets/tier-logos/vue.svg";
import NextIcon from "~/src/assets/tier-logos/next.svg";
import RubyIcon from "~/src/assets/tier-logos/ruby.svg";
import QuantumIcon from "~/src/assets/tier-logos/quantum.svg";

export default function TierLogo({ tierId }) {
  switch (tierId) {
    case "tier1":
      return <WordpressIcon width="48" height="48" fill="var(--5)" />;
    case "tier2":
      return <VueIcon width="48" height="48" fill="var(--5)" />;
    case "tier3":
      return <NextIcon width="48" height="48" fill="var(--5)" />;
    case "tier4":
      return <RubyIcon width="48" height="48" fill="var(--5)" />;
    case "tier5":
      return <QuantumIcon width="48" height="48" fill="var(--5)" />;
    default:
      return <WordpressIcon width="48" height="48" fill="var(--5)" />;
  }
}
