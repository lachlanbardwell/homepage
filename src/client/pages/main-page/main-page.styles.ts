import styled from 'styled-components';

export const MainPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin-top: 10%;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

export const MainStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  flex-wrap: wrap;
  margin-bottom: 10%;
`;
