import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import withContext from "hoc/withContext";

import UserPageTemplate from "./UserPageTemplate";
import NewItemBar from "components/organisms/NewItemBar/NewItemBar";

import Input from "components/atoms/Input/Input";
import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import plusIcon from "assets/icons/add.png";

const StyledWrapper = styled.div`
  padding: 2.5rem 15rem 2.5rem 7rem;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledPageHeader = styled.div`
  margin: 2.5rem 0 5rem 0;
`;

const StyledHeading = styled(Heading)`
  margin: 2.5rem 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.light};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  z-index: 1000;
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  background-size: 60%;
  border-radius: 5rem;
  :hover {
    background-color: ${({ theme, visible }) =>
      !visible ? theme.success : theme.warning};
    cursor: pointer;
    box-shadow: 0px 0px 40px -8px ${({ theme, visible }) => (!visible ? theme.success : theme.warning)};
    transform: scale(1.2);
    transition: transform 0.2s ease-in;
  }
`;
const GridTemplate = ({ children, pageContext, length }) => {
  const [isNewItemVisible, setIsNewItemVisible] = useState(false);
  const toggleAddItem = () => setIsNewItemVisible(!isNewItemVisible);
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="search" />
          <StyledHeading big as="h1">
            {pageContext}
          </StyledHeading>
          <StyledParagraph>
            {length} {pageContext}
          </StyledParagraph>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
        <StyledButtonIcon
          visible={isNewItemVisible}
          activeColor={pageContext}
          icon={plusIcon}
          onClick={toggleAddItem}
        />
        <NewItemBar handleClose={toggleAddItem} isVisible={isNewItemVisible} />
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(["ideas", "travels", "creatives"]),
};

UserPageTemplate.defaultProps = {
  pageContext: "ideas",
};
export default withContext(GridTemplate);
