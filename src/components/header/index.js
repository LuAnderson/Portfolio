import React from 'react';
import * as S from './styles';

function Header() {
  return(
    <S.Header className="App-header">
      <S.Image src='./logo.svg' className="App-logo" alt="logo" />
      <S.Text>
        Edit <code>src/App.js</code> and save to reload.
      </S.Text>
      <S.Anchor
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </S.Anchor>
    </S.Header>
  );
}

export default Header;
