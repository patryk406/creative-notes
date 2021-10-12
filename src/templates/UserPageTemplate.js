import PropTypes from "prop-types";
import Sidebar from "components/organisms/Sidebar/Sidebar";

const UserPageTemplate = ({ children, pageType }) => {
  return (
    <>
      <Sidebar pageType={pageType} />
      {children}
    </>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  pageType: PropTypes.oneOf(["creatives", "ideas", "travels"]),
};

UserPageTemplate.defaultProps = {
  pageType: "ideas",
};
export default UserPageTemplate;
