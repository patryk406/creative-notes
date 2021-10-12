import styled from "styled-components";
import { NavLink } from "react-router-dom";

import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";

import IdeaIcon from "assets/icons/ideas.png";
import CreativeIcon from "assets/icons/creative.png";
import LogoutIcon from "assets/icons/logout.png";
import TravelIcon from "assets/icons/travel.png";
import LogoIcon from "assets/icons/logo.png";

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  height: 100vh;
  width: 16rem;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.ideas};
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 7rem;
  height: 7rem;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  border-radius: 5rem;
  margin-bottom: 10vh;
`;

const StyledLinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledLogOut = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageType }) => {
  return (
    <SidebarWrapper activeColor={pageType}>
      <StyledLogoLink to="/" />
      <StyledLinksList>
        <li>
          <ButtonIcon
            as={NavLink}
            to="/ideas"
            icon={IdeaIcon}
            activeclass="active"
          />
        </li>
        <li>
          <ButtonIcon
            as={NavLink}
            to="/travels"
            icon={TravelIcon}
            activeclass="active"
          />
        </li>
        <li>
          <ButtonIcon
            as={NavLink}
            to="/creatives"
            icon={CreativeIcon}
            activeclass="active"
          />
        </li>
      </StyledLinksList>
      <StyledLogOut as={NavLink} to="/login" icon={LogoutIcon} />
    </SidebarWrapper>
  );
};

export default Sidebar;
