/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;

  img {
    width: 100%;
  }
`;

export const AromaterpaiaSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
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

export const HipnobirthingSection = styled.section`
  display: flex;
  align-items: center;
  width: 100vw;
  transform: skewY(2deg);
  background: ${(props) => props.theme.colors.green};

  @media (min-width: 1151px) {
    position: relative;
    top: 85px;
    z-index: 90;
  }

  @media (max-width: 1150px) {
    margin-top: 100px;
    flex-direction: column;
    padding: 20px;
  }
`;

export const HipnobirthingSectionWrapper = styled.div`
  color: ${(props) => props.theme.colors.font_primary};
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  transform: skewY(-2deg);

  @media (max-width: 760px) {
    flex-direction: column;
  }

  > div {
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
