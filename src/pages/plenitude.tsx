import React, { useState } from 'react';
import Head from 'next/head';

import {
  Container,
  Menu,
  HeaderLogo,
  ContentSection,
  VideoSection,
  Footer,
  MenuButton,
  MenuOverlay,
  ContentSectionLeft,
  ContentSectionRight,
  ContentSectionWrapper
} from '../styles/plenitude';

import NAV_MENU_LINKS from '../app.config';

import MobileMenuIcon from '../assets/icons/mobile-menu-button.svg';
import HeaderLogoImg from '../assets/images/plenitude-header-logo.jpg';
import Img1 from '../assets/images/plenitude-img1.jpg';
import Img2 from '../assets/images/plenitude-img2.jpg';
import Img3 from '../assets/images/plenitude-img3.png';
import Img4 from '../assets/images/plenitude-img4.jpg';
import PlayIcon from '../assets/icons/play-button-icon.svg';

import FooterHouseImg from '../assets/images/footer-house.svg';
import FooterPersonImg from '../assets/images/footer-person.svg';
import { ILink } from '../data/ILinks.interface';
import LinkComponent from '../components/LinkComponent';

const PlenitudePage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = NAV_MENU_LINKS as ILink[];
  const pageTitle = 'Plenitude Tao - A Sabedoria do Tao';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Container>
        <MenuButton>
          <button type="button" onClick={openMenu}>
            <MobileMenuIcon />
          </button>
        </MenuButton>

        <Menu menuOpen={menuOpen}>
          {/* <NavLogo /> */}
          <img src="/logo-nav.png" alt="Plenitude Tao" />
          {navLinks.map((item) => (
            <LinkComponent
              key={item.id}
              link={item.link}
              description={item.description}
            />
          ))}
        </Menu>
        <MenuOverlay menuOpen={menuOpen} onClick={openMenu} />

        <HeaderLogo>
          <img src={HeaderLogoImg} alt="headerLogo" />
        </HeaderLogo>

        <ContentSectionWrapper>
          <ContentSection>
            <ContentSectionLeft>
              <p className="first_text">
                Tao (em chinês: A; Wade-Giles: tao; pinyin: dao) é o caracter
                chinês para Caminho. Dentro do contexto da filosofia tradicional
                e região Chinesa, o Tao é o conhecimento intuitivo da
                &quot;vida&quot; que que não não pode ser apreendido
                completamente - tão somente - como um ser conhecido, no entando,
                através da experiência de vida real, cotidiana.
              </p>

              <img src={Img1} alt="mountains" />
              <img src={Img2} alt="praying" />

              <p>
                A principal obra do taoismo é o Tao Ching, um livro conciso e
                ambíguo ambíguo que contém os ensinamentos atribuídos a Lao Zi
                (chinês: AA, Laozi, Wade-Glies: Lao Tzu).
              </p>
            </ContentSectionLeft>
            <ContentSectionRight>
              <p>
                O Tao não é apenas um caminho físico e espiritual; é
                identificado com com o absoluto que, por divisão, gerou os
                opostos/complementares yin yang, a partir dos quais todas as
                &quot;dez mil coisas&quot; (ou todas as coisas) que existem no
                Universo foram criadas. O Tao é o princípio fundamental do
                taoísmo filosófico e religioso, fundado por Lao Zi.
              </p>

              <img src={Img3} alt="house" />
              <img src={Img4} alt="buda" />
            </ContentSectionRight>
          </ContentSection>
        </ContentSectionWrapper>

        <VideoSection>
          <div className="content">
            <div className="video">
              <div className="overlay">
                <button type="button">
                  <PlayIcon />
                </button>
              </div>
              {/* <iframe
            title="video"
            width="714"
            height="534"
            src="https://www.youtube.com/embed/tSMepB8N1L0"
          /> */}
            </div>

            <div className="text">
              <h3>Plenitude</h3>
              <p>
                Com certa frequência, viver em plenitude se aplica à valorização
                da vida de um indivíduo de forma geral, pois isso equivale a uma
                existência intensa, satisfatória e gratificante.
              </p>

              <p>
                Em Filosofia, o &quot;Princípio de Plenitude&quot; foi estudado
                pelo historiador americano Arthur Lovejoy, na sua famosa obra:
                &quot;The Great Chain of Being&quot; (A Grande Cadeia do Ser),
                de 1936, com base nas ideias de Platão, na qual afirma que o
                universo é completo (pleno), porque se constitui de uma
                diversidade máxima de formas, em que todas as formas possíveis
                tornam-se atais.
              </p>
            </div>
          </div>
        </VideoSection>

        <Footer>
          <div className="images">
            <FooterHouseImg />
            <FooterPersonImg />
          </div>
        </Footer>
      </Container>
    </>
  );
};

export default PlenitudePage;
