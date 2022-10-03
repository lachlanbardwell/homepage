import React from 'react';
import styled from 'styled-components';
import { CardLink } from '../../components/card-link/card-link';

const MainPageStyles = styled.div`
  background: rgb(152, 77, 1);
  background: linear-gradient(
    180deg,
    rgba(152, 77, 1, 1) 0%,
    rgba(244, 136, 27, 1) 47%,
    rgba(255, 235, 0, 1) 100%
  );
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 80vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const MainStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  flex-wrap: wrap;
`;

export const MainPage: React.FC = () => {
  return (
    <MainPageStyles>
      <MainStyles>
        <CardLink title="Shopping List" descript="Shopping cart app" />
        <CardLink title="X & O" descript="Naughts and Crosses" />
        <CardLink title="Kitchen Daydreams" descript="Recipe app" />
      </MainStyles>
      <img src="" alt="animation" />
    </MainPageStyles>
  );
};
