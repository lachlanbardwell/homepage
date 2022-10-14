import React from 'react';
import { ICardProps } from '../../../types';
import {
  CardDescript,
  CardStyles,
  CardTitle,
  CardTop,
  Descript,
} from './card-link.styles';

export const CardLink: React.FC<ICardProps> = (props) => {
  return (
    <CardStyles onClick={() => window.open(props.link)}>
      <CardTop>
        <CardTitle>{props.title}</CardTitle>
        {props.img}
      </CardTop>
      <CardDescript>
        <Descript>{props.descript}</Descript>
      </CardDescript>
    </CardStyles>
  );
};
