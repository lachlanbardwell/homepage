import styled from 'styled-components';

export const MainPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin-top: 1%;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

export const MainStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  flex-wrap: wrap;
  margin-bottom: 3%;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const HeadingStyle = styled.div`
  display: inline-block;
  padding: 0.3em 0.5em;
  font-size: 16px;
  border-radius: 10px;
  color: white;
`;

export const LinkStyle = styled.a`
  color: black;
  text-decoration: none;
`;
