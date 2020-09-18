import styled, { css } from 'styled-components';

interface IProps {
  menuOpen: boolean;
}

export const Container = styled.section``;

export const MenuButton = styled.div`
  button {
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 100;

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

  ${(props) =>
    // eslint-disable-next-line prettier/prettier
    !props.menuOpen && css`
      display: none;
    `}
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
  z-index: 60;

  a + a {
    margin-top: 30px;
  }

  ${(props) =>
    // eslint-disable-next-line operator-linebreak
    props.menuOpen &&
    css`
      transform: translateX(0);
    `}
  @media (max-width: 700px) {
    width: 50%;
  }
`;

export const HeaderLogo = styled.div`
  width: 100%;

  text-align: center;

  @media (max-width: 1150px) {
    img {
      width: 100%;
    }
  }
`;

export const ContentSection = styled.section`
  padding: 100px;
  max-width: 1440px;
  max-height: 1300px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 1150px) {
    padding: 20px;
  }

  img {
    margin-top: 30px;
    width: 45%;

    @media (max-width: 1150px) {
      width: 100%;
    }
  }

  p {
    /* margin-left: 0; */
    width: 45%;
    margin-top: 20px;

    font-weight: 400;
    font-size: 22px;

    @media (max-width: 1150px) {
      width: 100%;
    }
  }

  & .first_text {
    margin-top: 0;
  }

  @media (max-width: 1366px) {
    max-height: 1300px;
  }

  @media (max-width: 1150px) {
    max-height: 100%;
    flex-wrap: nowrap;
  }
`;

export const VideoSection = styled.section`
  background-image: url('./middle-page-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 100px;

  @media (max-width: 1150px) {
    background-position: 0 0;
  }
  & .content {
    display: flex;
    align-items: center;

    padding: 100px;
    max-width: 1440px;

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
  background-image: url('./second-row-background.svg');
  background-repeat: no-repeat;
  background-size: cover;

  margin-top: -180px;

  & .images {
    display: flex;
    padding-top: 180px;

    max-width: 1440px;

    @media (max-width: 1150px) {
      height: 300px;

      svg {
        width: 30%;
        height: 200px;
      }
    }
  }
`;
