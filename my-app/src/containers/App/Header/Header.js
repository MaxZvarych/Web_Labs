import React from "react";
import {
  HeaderBackground,
  Wrapper,
  Slogan,
  IconBase,
  SocialNetworksBar,
  HeaderImage,
  LogOut,
} from "./Header.styled";
import {
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import logo from "../../../Icons/logo.png";

const Header = () => {
  let myStorage = window.localStorage;
  const logout = () => {
    myStorage.setItem("isAuthorized", false);
    window.location.reload();
  };
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
          <LogOut component={LogoutOutlined} onClick={logout} />
        </SocialNetworksBar>
      </Wrapper>
    </HeaderBackground>
  );
};

export default Header;
