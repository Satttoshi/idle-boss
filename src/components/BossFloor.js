import NameForm from "./NameForm";
import ThemeSwitch from "./ThemeSwitch";
import Button from "./BossFloorButton";
import { useState } from "react";
import ManagerModal from "./ManagerModal";

import useStore from "~/src/zustand/store";

function handleClick() {
  alert("You have been hired!");
}

export default function BossFloor() {
  const [isManagerModalOpen, setIsManagerModalOpen] = useState(true);

  const userName = useStore((state) => state.username);

  function handleManagerModalClose() {
    setIsManagerModalOpen(false);
  }

  return (
    <>
      <NameForm />
      <ThemeSwitch />
      <Button label="Job Interviews" onClick={handleClick} />
      {isManagerModalOpen && <ManagerModal userName={userName} />}
    </>
  );
}
