import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import UserPageTemplate from "./UserPageTemplate";
import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Button from "components/atoms/Button/Button";

import OsmaIcon from "assets/avatars/Osma.png";
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
  border: 0.3rem ${({ theme, activeColor }) => theme[activeColor]} solid;
  position: absolute;
  top: 20%;
  right: 20%;
`;
const StyledButton = styled(Button)`
  text-align: center;
  color: black;
  text-decoration: none;
  line-height: 3rem;
  font-weight: bold;
`;
const DetailsTemplate = ({
  title,
  content,
  id,
  created,
  travelName,
  pageContext,
}) => {
  return (
    <UserPageTemplate>
      <StyledDetailWrapper>
        <StyledHeadingWrapper>
          <Heading>{title}</Heading>
          <Paragraph>
            {pageContext}, {created}
          </Paragraph>
        </StyledHeadingWrapper>
        <StyledIcon src={OsmaIcon} activeColor={pageContext} />
        <StyledContent>{content}</StyledContent>
        <StyledButton as={Link} to="/">
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
  id: PropTypes.number.isRequired,
  created: PropTypes.string,
  travelName: PropTypes.string,
};
DetailsTemplate.defaultProps = {
  pageContext: "",
  title: "",
  content: "",
  id: "",
  created: "",
  travelName: "",
};
export default withContext(DetailsTemplate);
