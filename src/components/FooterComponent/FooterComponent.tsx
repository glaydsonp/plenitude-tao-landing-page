import React from 'react';

import NavLogo from '../../assets/icons/plenitude-logo.svg';

import LinkedinLogo from '../../assets/icons/linkedin.svg';
import FacebookLogo from '../../assets/icons/facebook.svg';
import InstagramLogo from '../../assets/icons/instagram.svg';

import {
  Footer,
  FooterWrapper,
  FooterLinks,
  FooterContact,
  ContactIcons
} from './styles';
import FooterGroupLinksComponent from '../FooterGroupLinksComponent/FooterGroupLinks';

const FooterComponent: React.FC = () => {
  const linksPlenitude = [
    {
      id: 1,
      description: 'Nossa história',
      link: '#'
    },
    {
      id: 2,
      description: 'Bastidores',
      link: '#'
    }
  ];
  const linksBlog = [
    {
      id: 1,
      description: 'Destaque',
      link: '#'
    },
    {
      id: 2,
      description: 'E-book',
      link: '#'
    }
  ];
  const linksServicos = [
    {
      id: 1,
      description: 'Aromaterapia',
      link: '#'
    },
    {
      id: 2,
      description: 'Thetahealing',
      link: '#'
    },
    {
      id: 3,
      description: 'Hipnobirthing',
      link: '#'
    },
    {
      id: 4,
      description: 'Laser',
      link: '#'
    },
    {
      id: 5,
      description: 'Hipnose',
      link: '#'
    },
    {
      id: 6,
      description: 'Acupuntura',
      link: '#'
    },
    {
      id: 7,
      description: 'Terapia de Regressão',
      link: '#'
    }
  ];
  const linksLoja = [
    {
      id: 1,
      description: 'Óleos essenciais',
      link: '#'
    },
    {
      id: 2,
      description: 'Kit',
      link: '#'
    },
    {
      id: 3,
      description: 'Umidificador de ar',
      link: '#'
    }
  ];
  const linksAgenda = [
    {
      id: 1,
      description: 'Eventos',
      link: '#'
    },
    {
      id: 2,
      description: 'Lives',
      link: '#'
    }
  ];

  return (
    <Footer>
      <FooterWrapper>
        <div className="logo">
          <NavLogo />
        </div>

        <FooterLinks>
          <FooterGroupLinksComponent title="Plenitude" links={linksPlenitude} />
          <FooterGroupLinksComponent title="Blog" links={linksBlog} />
          {/* <FooterGroupLinks>
            <FooterTitle>Plenitude</FooterTitle>
            {linksPlenitude.map((item) => (
              <LinkComponent
                description={item.description}
                link={item.link}
                key={item.id}
              />
            ))}
          </FooterGroupLinks>
          <FooterGroupLinks>
            <FooterTitle>Blog</FooterTitle>
            {linksBlog.map((item) => (
              <LinkComponent
                description={item.description}
                link={item.link}
                key={item.id}
              />
            ))}
          </FooterGroupLinks> */}
        </FooterLinks>

        <FooterLinks>
          <FooterGroupLinksComponent title="Serviços" links={linksServicos} />
          {/* <FooterGroupLinks>
            <FooterTitle>Serviços</FooterTitle>
            {linksServicos.map((item) => (
              <LinkComponent
                description={item.description}
                link={item.link}
                key={item.id}
              />
            ))}
          </FooterGroupLinks> */}
        </FooterLinks>

        <FooterLinks>
          <FooterGroupLinksComponent title="Loja" links={linksLoja} />
          <FooterGroupLinksComponent title="Agenda" links={linksAgenda} />
          {/* <FooterGroupLinks>
            <FooterTitle>Loja</FooterTitle>
            {linksLoja.map((item) => (
              <LinkComponent
                description={item.description}
                link={item.link}
                key={item.id}
              />
            ))}
          </FooterGroupLinks>
          <FooterGroupLinks>
            <FooterTitle>Agenda</FooterTitle>
            {linksAgenda.map((item) => (
              <LinkComponent
                description={item.description}
                link={item.link}
                key={item.id}
              />
            ))}
          </FooterGroupLinks> */}
        </FooterLinks>

        <FooterContact>
          <h3>FALE COM A GENTE</h3>
          <ContactIcons>
            <LinkedinLogo />
            <FacebookLogo />
            <InstagramLogo />
          </ContactIcons>
          <div>(19) 99692-1161</div>
          <div>
            Rua José Carlos Leme Franco Guimarães, 544 - Sala 2 jardim Margarida
            - Pirassununga - SP 13630-613
          </div>
        </FooterContact>
      </FooterWrapper>
    </Footer>
  );
};

export default FooterComponent;
