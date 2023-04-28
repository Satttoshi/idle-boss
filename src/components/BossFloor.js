import NameForm from "./NameForm";
import ThemeSwitch from "./ThemeSwitch";
import Button from "./BossFloorButton";

import useStore from "~/src/zustand/store";

export default function BossFloor() {
  const setManagerModal = useStore((state) => state.setManagerModal);
  const setConstructionModal = useStore((state) => state.setConstructionModal);

  function handleManagerModal() {
    setManagerModal(true);
  }

  function handleConstructionModal() {
    setConstructionModal(true);
  }

  return (
    <>
      <NameForm />
      <ThemeSwitch />
      <Button label="Job Applications" onClick={handleManagerModal} />
      <Button label="Construct new Floor" onClick={handleConstructionModal} />
    </>
  );
}
