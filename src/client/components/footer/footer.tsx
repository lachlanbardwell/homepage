import React from 'react';
import styled from 'styled-components';
import linkedin from '../../img/linkedin-black.svg';
import github from '../../img/GitHub-Mark-64px.png';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  height: 20vh;
  background: rgba(255, 235, 0, 1) 100%;
  width: 100%;
  padding-bottom: 100px;
`;

const MyPicStyles = styled.img`
  margin: auto;
`;

const LinkStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: auto 10%;
`;

const LinkImgStyles = styled.img`
  margin: auto 10%;
  max-width: 50px;
  max-height: 40px;
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <MyPicStyles alt="my pic" />
      <LinkStyles>
        <LinkImgStyles src={linkedin} alt="linkedin" />
        <LinkImgStyles src={github} alt="github" />
      </LinkStyles>
    </StyledFooter>
  );
};
