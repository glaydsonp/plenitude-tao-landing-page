import { shade } from 'polished';
import styled from 'styled-components';

export const FooterTitle = styled.h3`
  font-weight: normal;
  text-transform: uppercase;
`;

export const FooterGroupLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: 1150px) {
    padding-bottom: 20px;
  }

  a {
    text-decoration: none;
    font-weight: 100;
    color: ${(props) => props.theme.colors.font_primary};
    transition: 0.2s;

    &:hover {
      color: ${shade(0.4, '#6B3A00')};
      text-shadow: ${(props) => props.theme.shadows.text_shadow};
    }
  }
`;
