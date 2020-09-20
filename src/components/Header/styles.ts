import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface IProps {
  menuOpen: boolean;
}

const hideOverlay = () => css`
  display: none;
`;

const showOverlay = () => css`
  display: block;
  z-index: 90;
`;

const hideNav = () => css`
  transform: translateX(-90vw);
`;

const showNav = () => css`
  transform: translateX(0);
`;

export const PageOverlay = styled.div<IProps>`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: sticky;
  top: 0;
  left: 0;

  ${(props) => (props.menuOpen ? showOverlay() : hideOverlay())}
`;

export const MobileButton = styled.button`
  display: none;
  background: none;
  border: none;
  position: fixed;
  left: 10px;
  top: 10px;
  width: 40px;
  height: 40px;

  & > svg {
    width: 40px;
    height: 38px;
  }

  @media (max-width: 1150px) {
    display: block;
    z-index: 100;
  }
`;

export const Nav = styled.nav<IProps>`
  max-width: 1440px;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 1150px) {
    width: 40%;
  }

  @media (max-width: 1150px) {
    transform: translateX(-90vw);
    transition: transform 0.3s;
    background: #fef5ea;
    box-shadow: ${(props) => props.theme.shadows.default};
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    z-index: 90;
    ${(props) => (props.menuOpen ? showNav() : hideNav())}
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.font_primary};
    transition: 0.2s;
    font-size: 1rem;
    font-weight: 300;
    display: block;
    max-width: 150px;

    @media (max-width: 1150px) {
      order: 2;
      padding: 10px;
    }

    &:hover {
      color: ${shade(0.4, '#6B3A00')};
      text-shadow: ${(props) => props.theme.shadows.text_shadow};
    }

    & > svg {
      @media (min-width: 813px) {
        height: 90px;
      }
    }

    & > img {
      width: 100%;
    }

    &:nth-child(3) {
      @media (max-width: 1150px) {
        order: 1;
      }
    }
  }
`;
