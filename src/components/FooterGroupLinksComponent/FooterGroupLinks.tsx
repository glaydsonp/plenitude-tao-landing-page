import React from 'react';
import LinkComponent from '../LinkComponent';

import { FooterTitle, FooterGroupLinks } from './styles';

interface Links {
  id: number;
  description: string;
  link: string;
}

interface IProps {
  title: string;
  links: Links[];
}

const FooterGroupLinksComponent: React.FC<IProps> = ({ title, links }) => (
  <>
    <FooterGroupLinks>
      <FooterTitle>{title}</FooterTitle>
      {links.map((item) => (
        <LinkComponent
          description={item.description}
          link={item.link}
          key={item.id}
        />
      ))}
    </FooterGroupLinks>
  </>
);

export default FooterGroupLinksComponent;
