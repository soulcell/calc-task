import ButtonType from "@/types/button";

export type ButtonProps = {
  buttonType: ButtonType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
