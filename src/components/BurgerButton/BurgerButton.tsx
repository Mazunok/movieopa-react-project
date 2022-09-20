import { useWindowSize } from "hooks";
import { useState } from "react";
import { StyledButton } from "./styles";

interface IProps {
  onClick: () => void;
}

export const BurgerButton = ({ onClick }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width = 0 } = useWindowSize();

  const handleOpen = () => {
    onClick();
    setIsOpen(!isOpen);
  };

  return (
    <>
      {width <= 768 && (
        <>
          <StyledButton isOpen={isOpen} onClick={handleOpen}>
            <div></div>
            <div></div>
            <div></div>
          </StyledButton>
        </>
      )}
    </>
  );
};
