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
  MobileButton,
  PageOverlay
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

// Backgrounds
import BackgroundTop from '../assets/images/home-top-background.svg';
import BackgroundMiddle from '../assets/images/home-middle-background.svg';
import BackgroundBottom from '../assets/images/home-bottom-background.svg';
import LinkComponent from '../components/LinkComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent';

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const pageTitle = 'Plenitude Tao';

  return (
    <>
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

        <FooterComponent />
      </Container>
    </>
  );
};

export default Home;
