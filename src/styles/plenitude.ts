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
  transform: translateX(50vw);
`;

const showNav = () => css`
  transform: translateX(0);
`;

const contentSection = () => css`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 60px;

  @media (max-width: 1150px) {
    width: 100%;
    padding: 0 30px;
  }
`;

export const Container = styled.section`
  /* max-width: 1440px;
  margin: 0 auto; */
`;

export const MenuButton = styled.div`
  button {
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 110;
    background: none;
    border: none;

    @media (max-width: 1150px) {
      top: 10px;
      right: 10px;

      svg {
        width: 50px;
      }
    }
  }
`;

export const MenuOverlay = styled.div<IProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  ${(props) => (props.menuOpen ? showOverlay() : hideOverlay())}
`;

export const Menu = styled.nav<IProps>`
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  transform: translateX(50vw);
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
  width: 30%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  text-align: center;

  > svg {
    margin: 0 auto;
  }

  > img {
    margin: 0 auto;
    width: 180px;
    height: 180px;
  }

  a {
    margin-top: 30px;
    text-decoration: none;
    font-size: 36px;
    display: block;
    font-weight: 100;
    color: ${(props) => props.theme.colors.font_primary};
    transition: 0.2s;

    &:hover {
      color: ${shade(0.4, '#6B3A00')};
      text-shadow: ${(props) => props.theme.shadows.text_shadow};
    }
  }

  ${(props) => (props.menuOpen ? showNav() : hideNav())}

  @media (max-width: 700px) {
    width: 50%;
  }
`;

export const HeaderLogo = styled.div`
  width: 100%;
  text-align: center;
  background: ${(props) => props.theme.colors.background};

  @media (max-width: 1150px) {
    img {
      width: 100%;
    }
  }
`;

export const ContentSectionWrapper = styled.section`
  background: ${(props) => props.theme.colors.background};
`;

export const ContentSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 1440px;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.background};

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const ContentSectionLeft = styled.div`
  ${contentSection()};

  img:first-of-type {
    padding-bottom: 50px;
  }

  p:first-of-type {
    padding-bottom: 50px;
  }

  p:last-of-type {
    padding-top: 25px;
  }
`;

export const ContentSectionRight = styled.div`
  ${contentSection()};

  img:first-of-type {
    padding-bottom: 50px;
  }

  p:first-of-type {
    padding-bottom: 20px;
  }
`;

export const VideoSection = styled.section`
  background-image: url('/middle-page-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 100px;
  background-color: ${(props) => props.theme.colors.background};

  @media (max-width: 1150px) {
    background-position: 0 0;
  }

  & .content {
    display: flex;
    align-items: center;
    padding: 100px;
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 1150px) {
      flex-direction: column-reverse;
      padding: 20px;
    }

    & .video {
      position: relative;
      width: 714px;
      height: 534px;
      border-radius: 50px;
      overflow: hidden;

      @media (max-width: 1150px) {
        margin-top: 50px;
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 45%;
      }

      .overlay {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: green;
        border-radius: 50px;
        opacity: 1;

        button {
          background: none;
          border: none;

          @media (max-width: 1150px) {
            svg {
              width: 100px;
            }
          }
        }
      }
    }

    & .text {
      max-width: 472px;
      padding-left: 66px;

      @media (max-width: 1150px) {
        max-width: 100%;
        padding: 0%;
      }

      h3 {
        color: ${(props) => props.theme.colors.green};
        font-size: 80px;
        font-weight: 800;

        @media (max-width: 1150px) {
          font-size: 50px;
        }
      }

      p {
        color: black;
      }
    }
  }
`;

export const Footer = styled.footer`
  background-image: url('/footer-plenitude-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px;

  & .images {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 760px) {
      height: 400px;
      flex-direction: column;
    }

    @media (min-width: 1150px) {
      > svg {
        padding: 60px;
      }
    }
  }
`;
