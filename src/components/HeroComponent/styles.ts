/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100vw;
  height: 50vh;
  background-image: url('/hero-image.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
