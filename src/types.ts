import React from 'react';
export interface ICardProps {
  title: string;
  descript: string;
  img: React.ReactNode;
  link: string;
}

export interface ILottieImg {
  // eslint-disable-next-line
  animationJson: Record<string, any>;
}
