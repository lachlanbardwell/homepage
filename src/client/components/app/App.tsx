import React from 'react';
import GlobalStyles from '../../styles/global-styles';
import { MainPage } from '../../pages/main-page/main-page';
import Lottie from 'lottie-react';
import backgroundImage from '../../img/mountain.json';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Lottie
        animationData={backgroundImage}
        loop={true}
        style={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}
      />
      <MainPage />
    </div>
  );
};

export default App;
