import StyledSpinner, { SpinnerElement } from "./styled";

export default function LoadingSpinner(): JSX.Element {
  return (
    <StyledSpinner>
      <SpinnerElement />
      <SpinnerElement />
      <SpinnerElement />
      <SpinnerElement />
    </StyledSpinner>
  );
}
