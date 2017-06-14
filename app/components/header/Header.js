import React from 'react';
import HeaderContainer from './HeaderContainer';
import Title from './Title';
import Button from '../common/Button';

const Header = () => (
  <HeaderContainer>
    <Title href="#/">
      Movie Collection
    </Title>
    <Button href="#/new-movie">
      New Movie
    </Button>
  </HeaderContainer>
);

export default Header;
