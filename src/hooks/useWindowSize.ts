import { useEffect, useState } from "react";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = () => {
  const [state, setState] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return state;
};