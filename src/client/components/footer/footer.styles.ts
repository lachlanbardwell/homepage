import styled, { keyframes } from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  flex: 0 0 auto;
  height: 20vh;
  width: 100%;
`;

export const MyPicStyles = styled.img`
  margin: auto;
  max-width: 150px;
  max-height: 140px;
  border-radius: 50%;
`;

export const LinkImgStyles = styled.img`
  margin: auto auto auto 20%;
  padding-left: 10px;
  max-width: 50px;
  max-height: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const ToolTip = styled.span`
  border-radius: 10px;
  left: 0;
  right: 0;
  top: 120px;
  margin: auto;
  width: 80px;
  visibility: hidden;
  position: absolute;
  background: rgb(201, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(201, 255, 255, 1) 29%,
    rgba(177, 255, 206, 1) 98%
  );
  text-align: center;
  font-size: 12px;
  padding: 5px 0;
  border: 1px solid black;
`;

const fadeInOpactity = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const IconDiv = styled.div`
  display: flex;
  position: relative;
  &:hover ${ToolTip} {
    visibility: visible;
    opacity: 1;
    animation-name: ${fadeInOpactity};
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 300ms;
  }
`;
