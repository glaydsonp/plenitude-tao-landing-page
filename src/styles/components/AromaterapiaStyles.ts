import styled from 'styled-components';

export const AromaterapiaSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1440px;

  @media (max-width: 1150px) {
    flex-wrap: wrap-reverse;
  }

  img {
    border-radius: 20px;

    @media (max-width: 1150px) {
      margin-top: 30px;
      border-radius: 40px;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    @media (min-width: 813px) {
      margin-right: 50px;
    }

    @media (max-width: 1150px) {
      width: 100%;
    }

    h3 {
      font-size: 2rem;

      @media (max-width: 1150px) {
        font-size: 5vw;
      }
    }

    p {
      text-align: center;
      color: ${(props) => props.theme.colors.font_secondary};
      padding: 30px 0;
      font-size: 1.2rem;
      margin: auto;

      @media (min-width: 1150px) {
        width: 65%;
      }

      @media (max-width: 1150px) {
        font-size: 4vw;
      }
    }

    a {
      font-size: 1.5rem;
      font-weight: 300;
      color: ${(props) => props.theme.colors.font_primary};
      border: 1px solid #ffebd3;
      border-radius: 16px;
      padding: 10px 50px;
      background: #ffebd3;
      transition: 0.3s;
      width: 50%;
      min-width: 320px;
      margin: 20px auto;
      text-decoration: none;

      &:hover {
        box-shadow: ${(props) => props.theme.shadows.default};
        text-decoration: underline;
      }

      @media (max-width: 1150px) {
        font-size: 6vw;
      }

      @media (max-width: 813px) {
        min-width: 250px;
      }
    }
  }
`;

export const AromaterapiaSection = styled.section`
  background-image: url('./second-row-background.svg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  padding: 135px 0 150px;
  position: relative;
  top: 8rem;

  @media (max-width: 1150px) {
    flex-direction: column;
    background: #fef5ea;
    margin-top: 20px;
    padding: 20px;
  }
`;

export const AromaterapiaText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 50px;

  @media (max-width: 813px) {
    padding: 25px;
  }
`;
