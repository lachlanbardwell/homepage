import React from 'react';
import myPic from '../../img/me.png';
import linkedin from '../../img/linkedin-circled.png';
import github from '../../img/GitHub-Mark-64px.png';
import {
  IconDiv,
  LinkImgStyles,
  MyPicStyles,
  StyledFooter,
  ToolTip,
} from './footer.styles';

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <IconDiv>
        <MyPicStyles src={myPic} alt="my pic" />
      </IconDiv>
      <IconDiv>
        <LinkImgStyles
          src={github}
          alt="github"
          onClick={() => window.open('https://github.com/lachlanbardwell/')}
        />
        <ToolTip>GitHub</ToolTip>
      </IconDiv>
      <IconDiv>
        <LinkImgStyles
          src={linkedin}
          alt="linkedin"
          onClick={() =>
            window.open('https://www.linkedin.com/in/lachlan-bardwell')
          }
        />
        <ToolTip>LinkedIn</ToolTip>
      </IconDiv>
    </StyledFooter>
  );
};
