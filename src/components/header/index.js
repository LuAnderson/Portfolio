import React, { useState } from 'react';
import * as S from './styles';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <S.Navbar showMenu={showMenu}>
      <S.Logo id="navbar">AnDesenv</S.Logo>
      <S.Anchor href="#inicio">Inicio</S.Anchor>
      <S.Anchor href="#profissional">Profissional</S.Anchor>
      <S.Anchor href="#portfolio">Portfólio</S.Anchor>
      <S.Anchor href="#trainning">Trainning</S.Anchor>
      <S.Anchor href="#library">Biblioteca</S.Anchor>
      <S.Anchor href="#smartphone">Aplicativos</S.Anchor>
      <S.Anchor href="#contato">Contato</S.Anchor>
      {/* 
      <S.Anchor onClick={() => setShowMenu(showMenu)}>
        <S.Icon className="fa fa-bars" /> icon-close
      </S.Anchor> 
      */}
    </S.Navbar>
  );
}

export default Header;
