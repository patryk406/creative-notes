import PropTypes from "prop-types";
import Sidebar from "components/organisms/Sidebar/Sidebar";
const UserPageTemplate = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

UserPageTemplate.defaultProps = {
  pageType: "ideas",
};
export default UserPageTemplate;
