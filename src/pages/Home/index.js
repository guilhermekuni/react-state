import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Home = () => {
  return (
    <S.Wrapper>
      <S.LinkButton>
        <Link to="/water-state">
          ESTADO DA ÁGUA
        </Link>
      </S.LinkButton>
      <S.LinkButton>TESTE 2</S.LinkButton>
      <S.LinkButton>TESTE 3</S.LinkButton>
    </S.Wrapper>
  );
};

export default Home;