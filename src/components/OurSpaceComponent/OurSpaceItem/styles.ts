import styled from 'styled-components';

export const OurSpaceIcon = styled.div`
  background-color: #f4e9dc;
  height: 90%;
  width: 100%;
  border-radius: 100%;
  padding: 40px;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const OurSpaceDescription = styled.h3`
  text-transform: uppercase;
  text-align: center;
  padding-top: 10px;
  font-weight: 300;
`;

export const OurSpaceItemWrapper = styled.div`
  height: 210px;
  width: 180px;
  cursor: pointer;

  @media (max-width: 760px) {
    margin-bottom: 30px;
    padding: 10px;
  }

  div {
    box-shadow: none;
    transition: 0.2s;
  }

  h3 {
    text-shadow: none;
    transition: 0.2s;
  }

  &:hover {
    div {
      box-shadow: ${(props) => props.theme.shadows.text_shadow};
    }

    h3 {
      text-shadow: ${(props) => props.theme.shadows.text_shadow};
    }
  }
`;
