import React, { useState, useEffect, useMemo } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import waterGas from '../../assets/images/water-gas.png';
import waterLiquid from '../../assets/images/water-liquid.png';
import waterSolid from '../../assets/images/water-solid.png';

import Header from '../../components/Header';

import * as S from './styles';

const WATER_STATES = {
  GAS: 'gas',
  LIQUID: 'liquid',
  SOLID: 'solid',
}

const WATER_STATES_IMAGES = {
  [WATER_STATES.GAS]: waterGas,
  [WATER_STATES.LIQUID]: waterLiquid,
  [WATER_STATES.SOLID]: waterSolid,
};

const WATER_STATES_LABELS = {
  [WATER_STATES.GAS]: 'Gasoso',
  [WATER_STATES.LIQUID]: 'Líquido',
  [WATER_STATES.SOLID]: 'Sólido',
};

const WaterState = () => {
  const [waterState, setWaterState] = useState('gas');
  const [temperature, setTemperature] = useState(99);

  useEffect(() => {
    const { GAS, LIQUID, SOLID } = WATER_STATES;

    if (temperature >= 100) {
      setWaterState(GAS);
    } else if (temperature >= 0) {
      setWaterState(LIQUID);
    } else {
      setWaterState(SOLID);
    }
  }, [temperature]);

  const waterStateImage = useMemo(() =>
    WATER_STATES_IMAGES[waterState],
    [waterState]);

  const waterStateName = useMemo(() =>
    WATER_STATES_LABELS[waterState],
    [waterState]);

  return (
    <S.Wrapper>
      <Header />
      <S.WaterStateWrapper>
        <h2>Estado: {waterStateName}</h2>
        <img alt="Water State" src={waterStateImage} />
        <div className='slider orientation-reversed'>
          <div className='slider-group'>
            <div className='slider-vertical'>
              <Slider
                min={-100}
                max={200}
                value={temperature}
                orientation='vertical'
                onChange={setTemperature}
              />
              <div className='value'>{temperature}°</div>
            </div>
          </div>
        </div>
      </S.WaterStateWrapper>
    </S.Wrapper>
  );
};

export default WaterState;