import React from 'react';
import GlobalStyles from '../../styles/global-styles';
import { SuperGHeader } from '../header/header';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <SuperGHeader />
    </div>
  );
};

export default App;
