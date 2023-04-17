import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h2`
  margin: ${({ theme }) => theme.margins.xs}
    ${({ theme }) => theme.margins.zero};
  font-size: 1.5em;
`;
