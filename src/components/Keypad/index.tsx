import { Button, StyledKeypad } from "./styled";

export default function Keypad(): JSX.Element {
  return (
    <StyledKeypad>
      <Button>C</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>*</Button>

      <Button>-</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>/</Button>

      <Button>+</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>=</Button>

      <Button>.</Button>
      <Button>(</Button>
      <Button>0</Button>
      <Button>)</Button>
      <Button>CE</Button>
    </StyledKeypad>
  );
}
