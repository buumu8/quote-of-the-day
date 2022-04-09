import styled, { css } from "styled-components";

export const QuoteContainer = styled.div`
  width: auto;
  max-width: 900px;
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[0]};
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1000px) {
    margin: auto ${(props) => props.theme.space[2]};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: ${(props) => props.theme.space[3]};
  display: flex;
  justify-content: space-between;
`;
