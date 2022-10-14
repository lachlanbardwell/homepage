import styled from 'styled-components';

export const CardStyles = styled.article`
  display: flex;
  flex-direction: column;
  flex: 0 0 25vw;
  justify-content: center;
  margin: auto;
  border-radius: 7px;
  border: 1px solid black;
`;

export const CardTitle = styled.h5`
  margin: auto;
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 7px 7px 0 0;
  padding: 35px;
  background: rgb(201, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(201, 255, 255, 1) 29%,
    rgba(177, 255, 206, 1) 98%
  );
`;

export const CardDescript = styled.div`
  border-radius: 0 0 7px 7px;
  background: #fff;
`;

export const Descript = styled.p`
  padding: 5px;
  font-size: 14px;
`;
