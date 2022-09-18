import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const handleIsOpen = () => setIsOpen(!isOpen);

  return [isOpen, handleIsOpen];
};
