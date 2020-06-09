import React, { useState } from 'react';

import Header from '../../components/Header';

import * as S from './styles';

const Counter = () => {
  const [stateCounter, setStateCounter] = useState(0);

  let variableCounter = 0;

  const handleStateCounterIncrement = () => {
    setStateCounter(stateCounter + 1);
  };

  const handleVariableCounterIncrement = () => {
    variableCounter += 1;
    console.log({ variableCounter });
  };

  return (
    <S.Wrapper>
      <Header />
      <S.ButtonWrapper>
        <div>
          <S.StateCounter onClick={handleStateCounterIncrement}>
            Incrementar Estado
          </S.StateCounter>
          <p>CONTADOR ESTADO: {stateCounter}</p>
        </div>
        <div>
          <S.VariableCounter onClick={handleVariableCounterIncrement}>
            Incrementar Variável
          </S.VariableCounter>
          <p>CONTADOR VARIÁVEL: {variableCounter}</p>
        </div>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Counter;
