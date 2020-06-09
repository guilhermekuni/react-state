import React, { useState, useMemo } from 'react';

import waterGas from '../../assets/images/water-gas.png';
import waterLiquid from '../../assets/images/water-liquid.png';
import waterSolid from '../../assets/images/water-solid.png';

import * as S from './styles';

const WATER_STATES_IMAGES = {
  'gas': waterGas,
  'liquid': waterLiquid,
  'solid': waterSolid,
};

const WATER_STATES = {
  'gas': 'Gasoso',
  'liquid': 'Líquido',
  'solid': 'Sólido',
};

const WaterState = () => {
  const [waterState, setWaterState] = useState('gas');
  const [temperature, setTemperature] = useState('gas');

  const waterStateImage = useMemo(() =>
    WATER_STATES_IMAGES[waterState],
    [waterState]);

  const waterStateName = useMemo(() =>
    WATER_STATES[waterState],
    [waterState]);

  return (
    <S.Wrapper>
      <S.WaterStateWrapper>
        <h2>Estado: {waterStateName}</h2>
        <img alt="Water State" src={waterStateImage} />
      </S.WaterStateWrapper>
    </S.Wrapper>
  );
};

export default WaterState;