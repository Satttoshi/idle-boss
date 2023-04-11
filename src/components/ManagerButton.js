import { useStore } from "~/src/zustand/store";

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
    <button
      disabled={!tier.hasManager}
      type="button"
      onClick={handleHireManager}
    >
      Hire Manager for {currentTier.name}
    </button>
  );
}
