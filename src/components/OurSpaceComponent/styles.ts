import styled from 'styled-components';

export const OurSpace = styled.section`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;

  & > svg {
    margin-top: -15%;

    position: absolute;
    top: 0;

    width: 100%;

    @media (max-width: 1150px) {
      display: none;
    }
  }
`;

export const OurSpaceWrapper = styled.div`
  font-weight: bold;
`;

export const OurSpaceTitle = styled.h3`
  font-weight: 300;
  text-align: center;
  font-size: 2.5rem;
  padding-bottom: 20px;

  @media (max-width: 1150px) {
    font-size: 7vw;
  }
`;

export const OurSpaceItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 1150px) {
    width: 60%;
    margin: 0 auto;
  }
`;
