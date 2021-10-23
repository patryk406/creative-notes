import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import UserPageTemplate from "./UserPageTemplate";
import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Button from "components/atoms/Button/Button";

import NarethIcon from "assets/avatars/Nareth.png";
import Bulb from "assets/icons/bulb.png";
import SmokeIcon from "assets/icons/smoke.png";
import withContext from "hoc/withContext";

const StyledDetailWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 90vh;
  width: 80%;
`;
const StyledHeadingWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 15%;
`;
const StyledContent = styled.div`
  padding: 10rem 0 0 0;
  width: 30%;
  text-align: center;
`;
const StyledIcon = styled.img`
  height: 8rem;
  width: 8rem;
  border-radius: 5rem;
  border: 0.3rem ${({ theme, acitvecolor }) => theme[acitvecolor]} solid;
  padding: 0.5rem;
  position: absolute;
  top: 10%;
  right: 10%;
`;
const StyledButton = styled(Button)`
  background-color: ${({ theme, acitvecolor }) => theme[acitvecolor]};
  text-align: center;
  color: black;
  text-decoration: none;
  line-height: 3rem;
  font-weight: bold;
`;
const DetailsTemplate = ({ title, content, pageContext }) => {
  return (
    <UserPageTemplate>
      <StyledDetailWrapper>
        <StyledHeadingWrapper>
          <Heading>{title}</Heading>
          <Paragraph>{pageContext}</Paragraph>
        </StyledHeadingWrapper>
        {pageContext === "travels" && (
          <StyledIcon src={NarethIcon} acitvecolor={pageContext} />
        )}
        {pageContext === "ideas" && (
          <StyledIcon src={Bulb} acitvecolor={pageContext} />
        )}
        {pageContext === "creatives" && (
          <StyledIcon src={SmokeIcon} acitvecolor={pageContext} />
        )}
        <StyledContent>{content}</StyledContent>
        <StyledButton
          as={Link}
          to={`/${pageContext}`}
          acitvecolor={pageContext}
        >
          back/save
        </StyledButton>
      </StyledDetailWrapper>
    </UserPageTemplate>
  );
};

DetailsTemplate.propTypes = {
  pageContext: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
DetailsTemplate.defaultProps = {
  pageContext: "",
  title: "",
  content: "",
  id: "",
};
export default withContext(DetailsTemplate);
