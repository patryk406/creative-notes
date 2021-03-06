import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";

import IdeaIcon from "assets/icons/ideas.png";
import CreativeIcon from "assets/icons/creative.png";
import LogoutIcon from "assets/icons/logout.png";
import TravelIcon from "assets/icons/travel.png";
import LogoIcon from "assets/icons/logo.png";

import withContext from "hoc/withContext";

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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledLogOut = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageContext }) => {
  return (
    <SidebarWrapper activeColor={pageContext}>
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

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(["ideas", "travels", "creatives"]),
};
Sidebar.defaultProps = {
  pageContext: "ideas",
};
export default withContext(Sidebar);
