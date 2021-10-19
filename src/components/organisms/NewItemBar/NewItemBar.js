import PropTypes from "prop-types";
import styled from "styled-components";

import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";
import Heading from "components/atoms/Heading/Heading";
import withContext from "hoc/withContext";
const StyledWrapper = styled.div`
  border-left: 1rem solid ${({ theme, activeColor }) => theme[activeColor]};
  padding: 10rem 5rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -0.5rem 0 1.5rem rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform ease-in-out 0.3s;
`;
const StyledTextArea = styled(Input)`
  border-radius: 1rem;
  height: 30vh;
  margin: 3rem 0 10rem 0;
`;
const StyledButton = styled(Button)`
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
`;
const NewItemBar = ({ pageContext, isVisible }) => {
  return (
    <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
      <Heading big>Create new {pageContext}</Heading>
      <Input placeholder="title" />
      <StyledTextArea as="textarea" placeholder="content" />
      <StyledButton activeColor={pageContext}>Add note</StyledButton>
    </StyledWrapper>
  );
};

export default withContext(NewItemBar);
