import React from 'react';
import {
  OurSpaceIcon,
  OurSpaceDescription,
  OurSpaceItemWrapper
} from './styles';

interface IProps {
  description: string;
  icon: string;
  link: string;
}

const OurSpaceItem: React.FC<IProps> = ({ description, icon, link }) => {
  const goTo = () => {
    const a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    a.click();
  };

  return (
    <OurSpaceItemWrapper onClick={goTo}>
      <OurSpaceIcon>
        <img src={icon} alt={description} />
      </OurSpaceIcon>
      <OurSpaceDescription>{description}</OurSpaceDescription>
    </OurSpaceItemWrapper>
  );
};

export default OurSpaceItem;
