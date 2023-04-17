import LoadingSpinner from "@/components/LoadingSpinner";

import StyledLoadingPage from "./styled";

export default function LoadingPage(): JSX.Element {
  return (
    <StyledLoadingPage>
      <LoadingSpinner />
    </StyledLoadingPage>
  );
}
