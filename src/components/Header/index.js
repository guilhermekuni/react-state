import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Header = () => (
  <S.Header>
    <Link to="/">
      <button>VOLTAR</button>
    </Link>
  </S.Header>
);

export default Header;