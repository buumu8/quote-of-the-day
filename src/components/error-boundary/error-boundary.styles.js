import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: inherit;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.h2};
  color: ${(props) => props.theme.colors.brand.primary};
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: ${(props) => props.theme.fontSizes.h4};
  }
`;
