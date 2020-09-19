import React, { useState } from 'react';
import LinkComponent from '../LinkComponent';

import MobileMenuIcon from '../../assets/icons/mobile-menu-button.svg';
import NavLogo from '../../assets/icons/plenitude-logo.svg';

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
      link: '#'
    },
    {
      id: 2,
      description: 'Blog',
      link: '#'
    },
    {
      id: 3,
      description: 'Loja',
      link: '#'
    },
    {
      id: 4,
      description: 'Contato',
      link: '#'
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
        <NavLogo />
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
