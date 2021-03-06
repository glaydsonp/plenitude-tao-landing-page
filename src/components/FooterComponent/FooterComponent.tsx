import React from 'react';
import Link from 'next/link';

// import NavLogo from '../../assets/icons/plenitude-logo.svg';

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
import FooterGroupLinksComponent from '../FooterGroupLinksComponent';

const FooterComponent: React.FC = () => {
  const linksPlenitude = [
    {
      id: 1,
      description: 'Nossa história',
      link: 'plenitude'
    },
    {
      id: 2,
      description: 'Bastidores',
      link: 'https://instagram.com/plenitudetao'
    }
  ];
  const linksBlog = [
    {
      id: 1,
      description: 'Destaque',
      link: 'http://blog.plenitudetao.com/'
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
      link: 'http://blog.plenitudetao.com/categorias/2'
    },
    {
      id: 2,
      description: 'Thetahealing',
      link: 'http://blog.plenitudetao.com/categorias/5'
    },
    // {
    //   id: 3,
    //   description: 'Hipnobirthing',
    //   link: '#'
    // },
    {
      id: 4,
      description: 'Laser',
      link: 'http://blog.plenitudetao.com/categorias/9'
    },
    {
      id: 5,
      description: 'Hipnose',
      link: 'http://blog.plenitudetao.com/categorias/4'
    },
    {
      id: 6,
      description: 'Acupuntura',
      link: 'http://blog.plenitudetao.com/categorias/8'
    },
    {
      id: 7,
      description: 'Terapia de Regressão',
      link: 'http://blog.plenitudetao.com/categorias/7'
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
      link: 'https://www.facebook.com/plenitudetaoterapias'
    },
    {
      id: 2,
      description: 'Lives',
      link: 'https://www.facebook.com/plenitudetaoterapias'
    }
  ];

  const rua = 'Rua José Carlos Leme Franco Guimarães, 544 - Sala 2';
  const bairro = 'Jardim Margarida';
  const cidade = 'Pirassununga - SP';
  const cep = '13630-613';
  const phoneNumber = '(19) 99692-1161';
  const address = `${rua} ${bairro} - ${cidade} - ${cep}`;

  return (
    <Footer>
      <FooterWrapper>
        <div className="logo">
          {/* <NavLogo /> */}
          <img src="/logo-nav.png" alt="Plenitude Tao" />
        </div>

        <FooterLinks>
          <FooterGroupLinksComponent title="Plenitude" links={linksPlenitude} />
          <FooterGroupLinksComponent title="Blog" links={linksBlog} />
        </FooterLinks>

        <FooterLinks>
          <FooterGroupLinksComponent title="Serviços" links={linksServicos} />
        </FooterLinks>

        <FooterLinks>
          <FooterGroupLinksComponent title="Loja" links={linksLoja} />
          <FooterGroupLinksComponent title="Agenda" links={linksAgenda} />
        </FooterLinks>

        <FooterContact>
          <h3>FALE COM A GENTE</h3>
          <ContactIcons>
            <a
              href="https://www.linkedin.com/company/plenitude-tao"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo />
            </a>
            <a
              href="https://www.facebook.com/plenitudetaoterapias"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookLogo />
            </a>
            <a
              href="https://instagram.com/plenitudetao"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramLogo />
            </a>
          </ContactIcons>
          <div>{phoneNumber}</div>
          <div>{address}</div>
        </FooterContact>
      </FooterWrapper>
    </Footer>
  );
};

export default FooterComponent;
