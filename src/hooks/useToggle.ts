import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const handleIsOpen = () => setIsOpen(!isOpen);

  return [isOpen, handleIsOpen];
};
