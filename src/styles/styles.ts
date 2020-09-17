/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { shade } from 'polished';
import footerBackgroundUrl from '../assets/images/footer-bg.svg';

interface IProps {
  menuOpen: boolean;
}

export const Container = styled.div`
  background: #fff;

  img {
    width: 100%;
  }
`;

export const PageOverlay = styled.div<IProps>`
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;

  /* z-index: 100; */

  ${(props) =>
    !props.menuOpen
    && css`
      display: none;
    `}
`;

export const MobileButton = styled.button`
  display: none;

  background: none;
  border: none;

  position: fixed;
  left: 10px;
  top: 10px;
  /* z-index: 101; */

  width: 40px;
  height: 40px;

  & > svg {
    width: 40px;
    height: 38px;
  }

  @media (max-width: 1150px) {
    display: block;
  }
`;

export const Nav = styled.nav<IProps>`
  max-width: 1440px;
  height: 100px;
  background: #fff;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 100px;

  @media (max-width: 1150px) {
    transform: translateX(-50vw);
    transition: transform 0.3s;

    ${(props) =>
    props.menuOpen
      && css`
        transform: translateX(0);
      `}

    background: #FEF5EA;
    box-shadow: ${(props) => props.theme.shadows.default};

    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 50%;

    flex-direction: column;
    justify-content: center;
    padding: 0;

    /* z-index: 100; */
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.font_primary};
    font-size: 36px;
    font-weight: 300;
    transition: 0.2s;
    display: block;

    &:hover {
      color: ${shade(0.4, '#6B3A00')};
      text-shadow: ${(props) => props.theme.shadows.text_shadow};
    }
  }

  & > svg {
    width: 14%;
    /* margin: 40px -150px 0 -100px; */

    @media (max-width: 1150px) {
      margin-top: -10px;
      margin-bottom: -60px;
    }
  }
`;

export const OurSpace = styled.section`
  position: relative;

  max-width: 1440px;

  & > svg {
    margin-top: -15%;

    position: absolute;
    top: 0;

    width: 100%;

    @media (max-width: 1150px) {
      display: none;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    position: relative;
    padding: 10px;

    /* z-index: 10; */

    h3 {
      font-size: 3rem;
      font-weight: 300;

      @media (max-width: 1150px) {
        font-size: 7vw;

        text-align: center;
      }
    }

    ul {
      list-style: none;
      margin-top: 20px;

      display: flex;
      flex-wrap: wrap;

      li {
        display: flex;
        flex-direction: column;

        max-width: 160px;

        & + li {
          @media (min-width: 1024px) {
            margin-left: 27px;
          }
        }

        svg {
          background: #f4e9dc;
          width: 160px;
          height: 160px;
          border-radius: 50%;

          padding: 25px;
          overflow: visible;
        }

        span {
          font-size: 22px;
          font-weight: 300;

          text-align: center;

          @media (max-width: 1150px) {
            font-size: 22px;
          }
        }
      }
    }
  }
`;

export const AromaterpaiaSection = styled.section`
  position: relative;

  display: flex;
  align-items: center;

  /* z-index: 20; */

  margin-top: 180px;
  padding: 0 100px;
  max-width: 1440px;

  @media (max-width: 1150px) {
    flex-direction: column;

    background: #fef5ea;

    margin-top: 20px;
    padding: 20px;
  }

  & > svg {
    margin-top: -15%;

    position: absolute;
    top: 0;
    left: 0;

    /* z-index: -1; */

    width: 100%;

    @media (max-width: 1150px) {
      display: none;
      height: 0;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    margin-right: 50px;

    @media (max-width: 1150px) {
      width: 100%;
    }

    h3 {
      font-size: 48px;

      @media (max-width: 1150px) {
        font-size: 5vw;
      }
    }

    p {
      font-size: 28px;
      text-align: center;

      color: ${(props) => props.theme.colors.font_secondary};

      @media (max-width: 1150px) {
        font-size: 4vw;
      }
    }

    button {
      margin-top: 20px;

      font-size: 36px;
      font-weight: 300;

      color: ${(props) => props.theme.colors.font_primary};

      border: 1px solid #ffebd3;
      border-radius: 16px;
      padding: 10px 50px;

      background: #ffebd3;

      transition: 0.3s;

      &:hover {
        box-shadow: ${(props) => props.theme.shadows.default};
      }

      @media (max-width: 1150px) {
        font-size: 6vw;
      }
    }
  }

  img {
    border-radius: 20px;

    @media (max-width: 1150px) {
      margin-top: 30px;

      border-radius: 40px;
    }
  }
`;

export const HipnobirthingSectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: -50%;
  /* z-index: -1; */
  margin-top: 20px;

  background: ${(props) => props.theme.colors.green};
  width: 200vw;
  height: 100%;
  transform: skewY(2deg);

  @media (max-width: 1367px) {
    margin-top: -20px;
    left: 0;
    width: 100vw;
  }
`;

export const HipnobirthingSection = styled.section`
  position: relative;

  display: flex;
  align-items: center;

  /* z-index: 20; */

  margin-top: 180px;
  max-width: 1440px;

  @media (max-width: 1150px) {
    margin-top: 100px;
    flex-direction: column;

    padding: 20px;
  }

  div {
    display: flex;
    flex-direction: column;

    margin-bottom: 90px;
    margin-right: 50px;
    padding: 0 40px 0 100px;

    @media (max-width: 1150px) {
      margin-right: 0;
      padding: 0;
    }

    h3 {
      font-size: 48px;
      color: #fff;

      @media (max-width: 1150px) {
        font-size: 5vw;
      }
    }

    p {
      font-size: 24px;
      font-weight: 300;
      text-align: center;

      color: #fff;

      @media (max-width: 1150px) {
        font-size: 4vw;
      }
    }

    button {
      margin-top: 20px;
      border: 1px solid #fff;
      border-radius: 16px;
      padding: 10px 50px;

      background: ${(props) => props.theme.colors.green};

      font-size: 36px;
      font-weight: 300;

      color: #fff;

      transition: 0.3s;

      &:hover {
        box-shadow: ${(props) => props.theme.shadows.default};
      }

      @media (max-width: 1150px) {
        font-size: 6vw;
      }
    }
  }
  img {
    border-radius: 20px 0 0 20px;

    @media (max-width: 1150px) {
      margin-top: 30px;

      border-radius: 40px;
    }
  }
`;

export const FloatingCircleText = styled.p`
  display: flex;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 39%;

  width: 207px;
  height: 207px;

  background: ${(props) => props.theme.colors.dark_green};
  border-radius: 50%;

  color: #fff;

  text-align: center;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 1150px) {
    display: none;
  }
`;

export const FooterWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  width: 100%;
  margin-top: auto;
  margin-bottom: 20px;
`;

export const Footer = styled.footer`
  display: flex;

  height: 400px;
  width: 100%;
  /* max-width: 1440px; */

  color: ${(props) => props.theme.colors.font_primary};
  background-image: url('./footer-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1150px) {
    flex-direction: column;
    padding-right: 0;

    justify-content: center;
    padding-bottom: 0;
    height: auto;
  }

  & .background {
    position: absolute;
    max-width: 1440px;

    /* left: 0;
    right: 0;
    z-index: 20; */
    /* overflow-x: hidden; */

    /* @media (max-width: 1150px) {
      display: none;
    } */
  }

  & .logo {
    /* width: 100%; */

    /* z-index: 21; */

    /* @media (max-width: 1150px) {
      display: none;
    } */
  }
`;

export const FooterLinks = styled.div`
  height: 200px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  /* position: relative; */
  /* z-index: 21; */

  /* width: 100%; */
  /* margin-left: -100px; */

  /* @media (max-width: 1150px) {
    margin-left: 0;
    height: 400px;

    padding: 0 20px;
  } */

  ul {
    list-style: none;
    margin-top: 10px;
    margin-left: 0;

    display: flex;
    flex-direction: column;

    @media (max-width: 1150px) {
      margin: 0 auto;
    }

    li {
      font-size: 18px;

      margin-left: 0;

      & > span {
        font-weight: 600;
      }
    }
  }
`;

export const FooterContact = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 210px; */

  /* position: relative; */
  /* z-index: 21; */
  /*
  span {
    margin-left: 0;

    @media (max-width: 1150px) {
      text-align: center;
      margin: 0 auto;
    }
  }

  @media (max-width: 1150px) {
    max-width: 100%;
    padding: 0 20px;
    margin: auto;
    text-align: center;
    padding-bottom: 20px;
  } */
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-left: 0;

  @media (max-width: 1150px) {
    margin: auto;
  }
`;
