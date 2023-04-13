import ButtonType from "@utils/buttonTypes";

export type ButtonProps = {
  buttonType: ButtonType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
