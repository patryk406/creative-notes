import PropTypes from "prop-types";
import Sidebar from "components/organisms/Sidebar/Sidebar";
import styled from "styled-components";
const StyledWrapper = styled.div`
  padding-left: 150px;
`;
const UserPageTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <Sidebar />
      {children}
    </StyledWrapper>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
  ]),
};

UserPageTemplate.defaultProps = {
  pageType: "ideas",
};
export default UserPageTemplate;
