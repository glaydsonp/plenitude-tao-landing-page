import React, { useState } from 'react';
import Link from 'next/link';
import LinkComponent from '../LinkComponent';

import MobileMenuIcon from '../../assets/icons/mobile-menu-button.svg';

import { PageOverlay, MobileButton, Nav } from './styles';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    {
      id: 1,
      description: 'Plenitude',
      link: '/plenitude'
    },
    {
      id: 2,
      description: 'Blog',
      link: 'http://blog.plenitudetao.com/'
    },
    {
      id: 3,
      description: 'Loja',
      link: '/#'
    },
    {
      id: 4,
      description: 'Contato',
      link:
        'https://api.whatsapp.com/send?phone=5519996921161&text=Oi%20queria%20falar%20com%20voc%C3%AAs'
    }
  ];

  return (
    <>
      <PageOverlay menuOpen={menuOpen} onClick={openMenu} />

      <MobileButton onClick={openMenu}>
        <MobileMenuIcon />
      </MobileButton>

      <Nav menuOpen={menuOpen}>
        {navLinks.splice(0, 2).map((item) => (
          <LinkComponent
            key={item.id}
            description={item.description}
            link={item.link}
          />
        ))}
        <Link href="/">
          <a>
            {/* <NavLogo /> */}
            <img src="/logo-topo.png" alt="Plenitude Tao" />
          </a>
        </Link>
        {navLinks.map((item) => (
          <LinkComponent
            key={item.id}
            description={item.description}
            link={item.link}
          />
        ))}
        {/* <Link href="/">Plenitude</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Loja</Link>
        <Link href="/">Contato</Link> */}
      </Nav>
    </>
  );
};

export default Header;
