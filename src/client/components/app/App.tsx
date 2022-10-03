import React from 'react';
import GlobalStyles from '../../styles/global-styles';
import { MainPage } from '../../pages/main-page/main-page';
import { Footer } from '../footer/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <MainPage />
      <Footer />
    </div>
  );
};

export default App;
