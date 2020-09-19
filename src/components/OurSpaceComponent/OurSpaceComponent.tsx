import React from 'react';

import {
  OurSpace,
  OurSpaceWrapper,
  OurSpaceTitle,
  OurSpaceItemsWrapper
} from './styles';
import OurSpaceItem from './OurSpaceItem';

const OurSpaceComponent: React.FC = () => {
  const items = [
    {
      id: 1,
      icon: './thetahealing.svg',
      description: 'Thetahealing',
      link: '#'
    },
    {
      id: 2,
      icon: './acupuntura.svg',
      description: 'Acupuntura',
      link: '#'
    },
    {
      id: 3,
      icon: './hipnose.svg',
      description: 'Hipnose',
      link: '#'
    },
    {
      id: 4,
      icon: './aromaterapia.svg',
      description: 'Aromaterapia',
      link: '#'
    },
    {
      id: 5,
      icon: './terapia-de-regressao.svg',
      description: 'Terapia de Regressão',
      link: '#'
    },
    {
      id: 6,
      icon: './laser-ilib.svg',
      description: 'Laser Ilib',
      link: '#'
    }
  ];
  return (
    <OurSpace>
      <OurSpaceWrapper>
        <OurSpaceTitle>Seja bem vindo ao nosso espaço</OurSpaceTitle>
        <OurSpaceItemsWrapper>
          {items.map((item) => (
            <OurSpaceItem
              key={item.id}
              description={item.description}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </OurSpaceItemsWrapper>
      </OurSpaceWrapper>
    </OurSpace>
  );
};

export default OurSpaceComponent;
