import PropTypes from "prop-types";
import styled from "styled-components";
import UserPageTemplate from "./UserPageTemplate";
import Input from "components/atoms/Input/Input";
import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
const StyledWrapper = styled.div`
  padding: 2.5rem 15rem 2.5rem 7rem;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-gap: 8.5rem;
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

const GridTemplate = ({ children, pageType }) => {
  return (
    <UserPageTemplate pageType={pageType}>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="search" />
          <StyledHeading big as="h1">
            {pageType}
          </StyledHeading>
          <StyledParagraph>6 {pageType}</StyledParagraph>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(["creatives", "ideas", "travels"]),
};

UserPageTemplate.defaultProps = {
  pageType: "ideas",
};
export default GridTemplate;
