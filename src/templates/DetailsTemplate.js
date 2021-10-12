import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import UserPageTemplate from "./UserPageTemplate";

const DetailsTemplate = ({ children, pageType }) => {
  return (
    <UserPageTemplate pageType={pageType}>
      {children}
      <Link to="/">Back</Link>
    </UserPageTemplate>
  );
};

export default DetailsTemplate;
