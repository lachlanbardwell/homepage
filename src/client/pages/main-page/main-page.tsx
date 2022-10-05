import React from 'react';
import Lottie from 'lottie-react';
import { CardLink } from '../../components/card-link/card-link';
import friedEgg from '../../img/Fried Egg.json';
import { MainPageStyles, MainStyles } from './main-page.styles';

export const MainPage: React.FC = () => {
  return (
    <MainPageStyles>
      <MainStyles>
        <CardLink title="Shopping List" descript="Shopping cart app" />
        <CardLink title="X & O" descript="Naughts and Crosses" />
        <CardLink title="Kitchen Daydreams" descript="Recipe app" />
      </MainStyles>
      <Lottie
        animationData={friedEgg}
        loop={true}
        style={{ margin: '-3% auto -5% auto', height: '250px', width: '250px' }}
      />
    </MainPageStyles>
  );
};
