import styled from 'styled-components';

export const FooterWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto auto 20px auto;

  @media (max-width: 1150px) {
    padding-top: 125px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  height: 350px;
  width: 100%;
  color: ${(props) => props.theme.colors.font_primary};
  background-image: url('./footer-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1151px) {
    position: relative;
    z-index: 100;
  }

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
  }
`;

export const FooterLinks = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* padding: 0 20px; */
`;

export const FooterContact = styled.div`
  width: 30%;
  max-width: 50vw;
  padding: 0 10px;

  @media (max-width: 813px) {
    width: 100%;
    max-width: 90vw;
  }
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0;

  > a {
    padding-right: 10px;
  }

  @media (max-width: 1150px) {
    margin: auto;
  }
`;
