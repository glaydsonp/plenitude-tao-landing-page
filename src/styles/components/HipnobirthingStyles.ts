import styled from 'styled-components';

export const HipnobirthingSection = styled.section`
  display: flex;
  align-items: center;
  width: 100vw;
  transform: skewY(2deg);
  background: ${(props) => props.theme.colors.green};
  overflow: hidden;

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
  overflow: hidden;

  @media (max-width: 1150px) {
    flex-direction: column;
  }

  img {
    border-radius: 20px 0 0 20px;

    @media (max-width: 1150px) {
      margin-top: 30px;
      border-radius: 40px;
    }
  }
`;

export const HipnobirthingSectionText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px 0 100px;
  text-align: center;

  @media (min-width: 813px) {
    margin-bottom: 90px;
    margin-right: 50px;
  }

  @media (max-width: 1150px) {
    margin-right: 0;
    padding: 0;
  }

  h3 {
    font-size: 2rem;
    color: #fff;

    @media (max-width: 1150px) {
      font-size: 5vw;
    }
  }

  p {
    font-size: 1.2rem;
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
    font-size: 1.5rem;
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
`;

export const FloatingCircleText = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  background: ${(props) => props.theme.colors.dark_green};
  border-radius: 50%;
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  height: 200px;
  align-items: center;
  width: 200px;

  @media (max-width: 1150px) {
    display: none;
  }
`;
