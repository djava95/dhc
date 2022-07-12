import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import { navLinkNames } from "../constants/constants";
import styled from "styled-components";

const MainContainer = styled.header`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 30px;
  background-color: white;
`
const NavBar = styled.nav`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 1320px;
`
const LogoContainer = styled.div`
  width: 30%;
`
const NavLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 60%;
`
	
const LanguageMenu = styled.div`
  width: 10%;
`

const Header = () => {
	const [linksData, setLinksData] = useState(navLinkNames);
  const location = useLocation();

  const toggleActive = (link : string) => {  
    const updatedLinksData = linksData.map(
      item => ({
        linkName : item.linkName, 
        active :  item.linkName === link? true :false
      })
    );
    setLinksData(updatedLinksData)
  };

  useEffect(()=> {
    toggleActive(location.pathname.replace('%20',' ').slice(1));
  }, [location.pathname])
  
	return (
		<MainContainer>
			<NavBar>
        <LogoContainer>
          <Link to={'/'}>
            <img src="" alt="logo"/>
          </Link>    
        </LogoContainer>
        <NavLinksContainer>
          {linksData.map((item) => (
            <NavLink key={item.linkName} handleToggle={toggleActive} active={item.active} linkName={item.linkName} /> 
          ))}
        </NavLinksContainer>
        <LanguageMenu></LanguageMenu>
			</NavBar>
		</MainContainer>
	);
};

export default Header;
