import React from "react";
import {
  HeaderBackground,
  Wrapper,
  Slogan,
  IconBase,
  SocialNetworksBar,
  HeaderImage,
} from "./Header.styled";
import Icon, {
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import logo from "../../../Icons/logo.png";

const Header = () => {
  return (
    <HeaderBackground>
      <Wrapper>
        <HeaderImage src={logo} alt="Logo_image" height="50px" />
        <Slogan>Clients choose us!</Slogan>
        <SocialNetworksBar>
          <a href="https://www.youtube.com/">
            <IconBase component={YoutubeOutlined} color="#FF0000" />
          </a>
          <a href="https://www.instagram.com/">
            <IconBase component={InstagramOutlined} color="#ffff" />
          </a>
          <a href="https://www.twitter.com/">
            <IconBase component={TwitterOutlined} color="#03A9F4" />
          </a>
          <a href="https://www.facebook.com/">
            <IconBase component={FacebookOutlined} color="#4267B2" />
          </a>
          <a href="https://www.LinkedIn.com/">
            <IconBase component={LinkedinOutlined} color="#007AB9" />
          </a>
        </SocialNetworksBar>
      </Wrapper>
    </HeaderBackground>
  );
};

export default Header;
