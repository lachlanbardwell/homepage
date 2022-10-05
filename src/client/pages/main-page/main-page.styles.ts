import styled from 'styled-components';

export const MainPageStyles = styled.div`
  background: rgb(255, 176, 63);
  background: linear-gradient(
    180deg,
    rgba(255, 176, 63, 1) 0%,
    rgba(255, 130, 30, 1) 34%,
    rgba(253, 255, 177, 1) 100%
  );

  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 80vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

export const MainStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  flex-wrap: wrap;
`;
