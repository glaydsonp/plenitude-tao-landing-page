import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/styles';
import {
  AromaterapiaSectionWrapper,
  AromaterapiaText,
  AromaterapiaSection
} from '../styles/components/AromaterapiaStyles';
import {
  HipnobirthingSection,
  HipnobirthingSectionWrapper,
  FloatingCircleText,
  HipnobirthingSectionText
} from '../styles/components/HipnobirthingStyles';

import AromaterapiaImg from '../assets/images/aromaterapia-img.jpg';
import HipnobirthingImg from '../assets/images/hipnobirthing-background.jpg';

import FooterComponent from '../components/FooterComponent';
import Header from '../components/Header';
import HeroComponent from '../components/HeroComponent';
import OurSpaceComponent from '../components/OurSpaceComponent';

const Home: React.FC = () => {
  const pageTitle = 'Plenitude Tao - A Sabedoria do Tao';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Container>
        <Header />
        <HeroComponent />
        <OurSpaceComponent />

        <AromaterapiaSection>
          <AromaterapiaSectionWrapper>
            <AromaterapiaText>
              <h3>Aromaterapia</h3>
              <p>
                Aromaterapia é integrar o homem com a flora! Essa é a essência
                da aromaterapia, uma ciência que traz a alquimia dos óleos
                essenciais, extraídos de diversas floras, flores e caules; para
                o benefício da saúde de todos os seres!
              </p>
              <a
                href="http://blog.plenitudetao.com/post/19"
                target="_blank"
                rel="noreferrer"
              >
                SAIBA MAIS
              </a>
            </AromaterapiaText>

            <img src={AromaterapiaImg} alt="aromaterapia" />
          </AromaterapiaSectionWrapper>
        </AromaterapiaSection>

        <HipnobirthingSection>
          <HipnobirthingSectionWrapper>
            <FloatingCircleText>Nossa exclusividade</FloatingCircleText>
            <HipnobirthingSectionText>
              <h3>Hipnobirthing</h3>
              <p>
                A hipnose no trabalho de parto auxilia essas mulheres no
                controle da dor, do medo e da ansiedade, através da alteração do
                seu estado de consciência. Assim, a mulher se sente mais
                preparada e mais capaz de realizar essa tarefa com segurança,
                confiança e foco.
              </p>
              <a
                href="http://blog.plenitudetao.com/post/104"
                target="_blank"
                rel="noreferrer"
              >
                SAIBA MAIS
              </a>
            </HipnobirthingSectionText>

            <img src={HipnobirthingImg} alt="HipnobirthingImg" />
          </HipnobirthingSectionWrapper>
        </HipnobirthingSection>

        <FooterComponent />
      </Container>
    </>
  );
};

export default Home;
