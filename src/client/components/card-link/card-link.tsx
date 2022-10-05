import React from 'react';
import { ICardProps } from '../../../types';
import { CardStyles } from './card-link.styles';

export const CardLink: React.FC<ICardProps> = (props) => {
  return (
    <CardStyles>
      <h3>{props.title}</h3>
      <img src="" alt="card img" />
      <h5>{props.descript}</h5>
    </CardStyles>
  );
};
