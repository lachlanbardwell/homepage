import React from 'react';
import { ICardProps } from '../../../types';
import styled from 'styled-components';

const CardStyles = styled.article`
  padding: 10px;
  margin: auto 5%;
  border: 1px solid black;
  height: 80%;
`;

export const CardLink: React.FC<ICardProps> = (props) => {
  return (
    <CardStyles>
      <h3>{props.title}</h3>
      <img src="" alt="card img" />
      <h5>{props.descript}</h5>
    </CardStyles>
  );
};
