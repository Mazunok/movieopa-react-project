import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface IProps {
  target: string;
  children: ReactNode;
}

export enum PortalTarget {
  ROOT = "root",
  MODAL = "modal",
}

export const Portal = ({ target, children }: IProps) => {
  const root = document.getElementById(target);

  return root ? ReactDOM.createPortal(children, root) : null;
};
