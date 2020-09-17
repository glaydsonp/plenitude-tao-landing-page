import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// eslint-disable-next-line object-curly-newline
import {
  Container,
  Nav,
  OurSpace,
  AromaterpaiaSection,
  HipnobirthingSection,
  HipnobirthingSectionBackground,
  FloatingCircleText,
  Footer,
  FooterLinks,
  FooterContact,
  ContactIcons,
  MobileButton,
  PageOverlay,
  FooterWrapper
} from '../styles/styles';

import AromaterapiaImg from '../assets/images/aromaterapia-img.jpg';
import HipnobirthingImg from '../assets/images/hipnobirthing-background.jpg';

import NavLogo from '../assets/icons/plenitude-logo.svg';
import PlantBackground from '../assets/images/home-plant-background.jpg';
import Thetahealing from '../assets/icons/thetahealing.svg';
import Acupuntura from '../assets/icons/acupuntura.svg';
import Hipnose from '../assets/icons/hipnose.svg';
import Aromaterapia from '../assets/icons/aromaterapia.svg';
import TerapiaDeRegressao from '../assets/icons/terapia-de-regressao.svg';
import LaserIlib from '../assets/icons/laser-ilib.svg';
import MobileMenuIcon from '../assets/icons/mobile-menu-button.svg';

// Contact icons
import LinkedinLogo from '../assets/icons/linkedin.svg';
import FacebookLogo from '../assets/icons/facebook.svg';
import InstagramLogo from '../assets/icons/instagram.svg';

// Backgrounds
import BackgroundTop from '../assets/images/home-top-background.svg';
import BackgroundMiddle from '../assets/images/home-middle-background.svg';
import BackgroundBottom from '../assets/images/home-bottom-background.svg';

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const pageTitle = 'Plenitude Tao';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <PageOverlay menuOpen={menuOpen} />

        <MobileButton onClick={openMenu}>
          <MobileMenuIcon />
        </MobileButton>

        <Nav menuOpen={menuOpen}>
          <Link href="/">Plenitude</Link>
          <Link href="/">Blog</Link>
          <NavLogo />
          <Link href="/">Loja</Link>
          <Link href="/">Contato</Link>
        </Nav>

        {/* <img src={PlantBackground} alt="background" /> */}

        <OurSpace>
          <BackgroundTop />

          <div>
            <h3>Seja bem vindo ao nosso espaço</h3>
            <ul>
              <li>
                <Thetahealing />
                <span>THEATAHEALING</span>
              </li>
              <li>
                <Acupuntura />
                <span>ACUPUNTURA</span>
              </li>
              <li>
                <Hipnose />
                <span>HIPNOSE</span>
              </li>
              <li>
                <Aromaterapia />
                <span>AROMATERAPIA</span>
              </li>
              <li>
                <TerapiaDeRegressao />
                <span>TERAPIA DE REGRESSÃO</span>
              </li>
              <li>
                <LaserIlib />
                <span>LASER ILIB</span>
              </li>
            </ul>
          </div>
        </OurSpace>

        <AromaterpaiaSection>
          <BackgroundMiddle />

          <div>
            <h3>Aromaterapia</h3>
            <p>
              Aromaterapia é integrar o homem com a flora! Essa é a essência da
              aromaterapia, uma ciência que traz a alquimia dos óleos
              essenciais, extraídos de diversas floras, flores e caules; para o
              benefício da saúde de todos os seres!
            </p>
            <button type="button">SAIBA MAIS</button>
          </div>

          <img src={AromaterapiaImg} alt="aromaterapia" />
        </AromaterpaiaSection>

        <HipnobirthingSection>
          <HipnobirthingSectionBackground />
          <FloatingCircleText>Nossa exclusividade</FloatingCircleText>
          <div>
            <h3>Hipnobirthing</h3>
            <p>
              A hipnose no trabalho de parto auxilia essas mulheres no controle
              da dor, do medo e da ansiedade, através da alteração do seu estado
              de consciência. Assim, a mulher se sente mais preparada e mais
              capaz de realizar essa tarefa com segurança, confiança e foco.
            </p>
            <button type="button">SAIBA MAIS</button>
          </div>

          <img src={HipnobirthingImg} alt="HipnobirthingImg" />
        </HipnobirthingSection>

        <Footer>
          {/* <div className="background">
            <BackgroundBottom />
          </div> */}

          <FooterWrapper>
            <div className="logo">
              <NavLogo />
            </div>
            <FooterLinks>
              <ul>
                <li>
                  <span>PLENITUDE</span>
                </li>
                <li>
                  <a>Nossa história</a>
                </li>
                <li>
                  <a>Bastidores</a>
                </li>
              </ul>

              <ul>
                <li>
                  <span>BLOG</span>
                </li>
                <li>
                  <a>Destaque</a>
                </li>
                <li>
                  <a>E-book</a>
                </li>
              </ul>

              <ul>
                <li>
                  <span>SERVIÇOS</span>
                </li>
                <li>
                  <a>Aromaterapia</a>
                </li>
                <li>
                  <a>Thetahealing</a>
                </li>
                <li>
                  <a>Hipnobirthing</a>
                </li>
                <li>
                  <a>Laser</a>
                </li>
                <li>
                  <a>Hipnose</a>
                </li>
                <li>
                  <a>Acupuntura</a>
                </li>
                <li>
                  <a>Terapia de Regressão</a>
                </li>
              </ul>

              <ul>
                <li>
                  <span>LOJA</span>
                </li>
                <li>
                  <a>Óleos essenciais</a>
                </li>
                <li>
                  <a>Kit</a>
                </li>
                <li>
                  <a>Umificador de ar</a>
                </li>
              </ul>

              <ul>
                <li>
                  <span>AGENDA</span>
                </li>
                <li>
                  <a>Eventos</a>
                </li>
                <li>
                  <a>Live</a>
                </li>
              </ul>
            </FooterLinks>
            <FooterContact>
              <span>FALE COM A GENTE</span>
              <ContactIcons>
                <LinkedinLogo />
                <FacebookLogo />
                <InstagramLogo />
              </ContactIcons>
              <span>(19) 99692-1161</span>
              <span>
                Rua José Carlos Leme Franco Guimarães, 544 - Sala 2 jardim
                Margarida - Pirassununga - SP 13630-613
              </span>
            </FooterContact>
          </FooterWrapper>
        </Footer>
      </Container>
    </div>
  );
};

export default Home;
