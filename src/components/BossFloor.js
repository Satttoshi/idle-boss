import NameForm from "./NameForm";
import ThemeSwitch from "./ThemeSwitch";
import Button from "./BossFloorButton";
import useStore from "~/src/zustand/store";

export default function BossFloor() {
  const setManagerModal = useStore((state) => state.setManagerModal);
  const setConstructionModal = useStore((state) => state.setConstructionModal);
  const saveGame = useStore((state) => state.saveGame);
  const setApprovalModalOpen = useStore((state) => state.setApprovalModalOpen);

  function handleManagerModal() {
    setManagerModal(true);
  }

  function handleConstructionModal() {
    setConstructionModal(true);
  }

  function handleSaveGame() {
    saveGame();
  }

  function handleResetSaveFile() {
    setApprovalModalOpen(true);
  }

  return (
    <>
      <NameForm />
      <ThemeSwitch />
      <Button label="Job Applications" onClick={handleManagerModal} />
      <Button label="Construct new Floor" onClick={handleConstructionModal} />
      <Button label="Save Game" onClick={handleSaveGame} />
      <Button label="Reset Save File" onClick={handleResetSaveFile} />
    </>
  );
}
