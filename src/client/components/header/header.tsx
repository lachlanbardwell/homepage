import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const SuperGHeader: React.FC = () => {
  return (
    <HeaderStyles>
      <p>Testing Global Styles</p>
    </HeaderStyles>
  );
};
