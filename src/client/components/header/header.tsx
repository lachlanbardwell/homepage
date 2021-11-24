import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  background-color: #071635;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  height: 150px;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const SuperGHeader: React.FC = () => {
  return (
    <HeaderStyles>
      <header>Header Text</header>
    </HeaderStyles>
  );
};
