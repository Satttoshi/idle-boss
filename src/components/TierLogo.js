import WordpressIcon from "~/src/assets/tier-logos/wordpress.svg";
import VueIcon from "~/src/assets/tier-logos/vue.svg";
import NextIcon from "~/src/assets/tier-logos/next.svg";
import RubyIcon from "~/src/assets/tier-logos/ruby.svg";
import QuantumIcon from "~/src/assets/tier-logos/quantum.svg";
import UnityIcon from "~/src/assets/tier-logos/unity.svg";
import UnrealIcon from "~/src/assets/tier-logos/unreal.svg";
import CryEngineIcon from "~/src/assets/tier-logos/cryengine.svg";
import CustomEngineIcon from "~/src/assets/tier-logos/customengine.svg";

export default function TierLogo({ tierId, forModal }) {
  function logoColor() {
    if (forModal) {
      return "var(--1)";
    } else {
      return "var(--5)";
    }
  }

  function logoSize() {
    if (forModal) {
      return "64";
    } else {
      return "48";
    }
  }

  switch (tierId) {
    case "tier1":
      return (
        <WordpressIcon
          width={logoSize()}
          height={logoSize()}
          fill={logoColor()}
        />
      );
    case "tier2":
      return (
        <VueIcon width={logoSize()} height={logoSize()} fill={logoColor()} />
      );
    case "tier3":
      return (
        <NextIcon width={logoSize()} height={logoSize()} fill={logoColor()} />
      );
    case "tier4":
      return (
        <RubyIcon width={logoSize()} height={logoSize()} fill={logoColor()} />
      );
    case "tier5":
      return (
        <QuantumIcon
          width={logoSize()}
          height={logoSize()}
          fill={logoColor()}
        />
      );
    case "tier6":
      return (
        <UnityIcon width={logoSize()} height={logoSize()} fill={logoColor()} />
      );
    case "tier7":
      return (
        <UnrealIcon width={logoSize()} height={logoSize()} fill={logoColor()} />
      );
    case "tier8":
      return (
        <CryEngineIcon
          width={logoSize()}
          height={logoSize()}
          fill={logoColor()}
        />
      );
    case "tier9":
      return (
        <CustomEngineIcon
          width={logoSize()}
          height={logoSize()}
          fill={logoColor()}
        />
      );
    default:
      return (
        <WordpressIcon
          width={logoSize()}
          height={logoSize()}
          fill={logoColor()}
        />
      );
  }
}
