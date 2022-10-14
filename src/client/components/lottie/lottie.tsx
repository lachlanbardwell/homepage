import React from 'react';
import Lottie from 'lottie-react';
import { ILottieImg } from '../../../types';

export const LottieImageSmall: React.FC<ILottieImg> = (props) => {
  return (
    <Lottie
      animationData={props.animationJson}
      loop={true}
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
      }}
    />
  );
};
