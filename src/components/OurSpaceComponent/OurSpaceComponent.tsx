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
      link: 'http://blog.plenitudetao.com/categorias/5'
    },
    {
      id: 2,
      icon: './acupuntura.svg',
      description: 'Acupuntura',
      link: 'http://blog.plenitudetao.com/categorias/8'
    },
    {
      id: 3,
      icon: './hipnose.svg',
      description: 'Hipnose',
      link: 'http://blog.plenitudetao.com/categorias/4'
    },
    {
      id: 4,
      icon: './aromaterapia.svg',
      description: 'Aromaterapia',
      link: 'http://blog.plenitudetao.com/categorias/2'
    },
    {
      id: 5,
      icon: './terapia-de-regressao.svg',
      description: 'Terapia de Regressão',
      link: 'http://blog.plenitudetao.com/categorias/7'
    },
    {
      id: 6,
      icon: './laser-ilib.svg',
      description: 'Laser Ilib',
      link: 'http://blog.plenitudetao.com/categorias/9'
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
