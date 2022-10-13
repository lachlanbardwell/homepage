import React from 'react';
import { CardLink } from '../../components/card-link/card-link';
import { Footer } from '../../components/footer/footer';
import { MainPageStyles, MainStyles } from './main-page.styles';

export const MainPage: React.FC = () => {
  return (
    <MainPageStyles>
      <MainStyles>
        <CardLink title="Shopping List" descript="Shopping cart app" />
        <CardLink title="X & O" descript="Naughts and Crosses" />
        <CardLink title="Kitchen Daydreams" descript="Recipe app" />
      </MainStyles>
      <Footer />
    </MainPageStyles>
  );
};
