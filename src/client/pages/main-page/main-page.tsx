import React from 'react';
import { CardLink } from '../../components/card-link/card-link';
import { Footer } from '../../components/footer/footer';
import {
  HeadingStyle,
  LinkStyle,
  MainPageStyles,
  MainStyles,
} from './main-page.styles';
import { LottieImageSmall } from '../../components/lottie/lottie';
import duck from '../../img/duck.json';
import friedEgg from '../../img/Fried Egg.json';
import fruitBasket from '../../img/fruit-basket.json';
import game from '../../img/game.json';

export const MainPage: React.FC = () => {
  return (
    <>
      <MainPageStyles>
        <HeadingStyle>
          Lachlan Bardwell &nbsp;&nbsp;&nbsp; lachbardwell@gmail.com
        </HeadingStyle>
        <MainStyles>
          <LinkStyle href="https://quackle.net">
            <CardLink
              title="Quackle"
              descript="Social Media App using React, NodeJS and MongoDB"
              img={<LottieImageSmall animationJson={duck} />}
            />
          </LinkStyle>
          <LinkStyle href="https://shoppinglist.lachieb.dev">
            <CardLink
              title="Shopping List"
              descript="Select items from 4 Australian stores, uses simulated API data"
              img={<LottieImageSmall animationJson={fruitBasket} />}
            />
          </LinkStyle>
          <LinkStyle href="https://xando.lachieb.dev">
            <CardLink
              title="X & O"
              descript="Naughts and Crosses game for 2 players with alternating turns"
              img={<LottieImageSmall animationJson={game} />}
            />
          </LinkStyle>
          <LinkStyle href="https://kitchen.lachieb.dev">
            <CardLink
              title="Kitchen Daydreams"
              descript="Search for recipes from edamam API. Filter, sort and favourite results"
              img={<LottieImageSmall animationJson={friedEgg} />}
            />
          </LinkStyle>
        </MainStyles>
        <Footer />
      </MainPageStyles>
    </>
  );
};
