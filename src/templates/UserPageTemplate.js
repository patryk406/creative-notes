import PropTypes from "prop-types";
import styled from "styled-components";
import Sidebar from "components/organisms/Sidebar/Sidebar";
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
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.light};
`;

const UserPageTemplate = ({ children, pageType }) => {
  return (
    <>
      <Sidebar pageType={pageType} />
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="search" />
          <StyledHeading big as="h1">
            Notes
          </StyledHeading>
          <StyledParagraph>6 Notes</StyledParagraph>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
      </StyledWrapper>
    </>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(["creative", "idea", "travel"]),
};

UserPageTemplate.defaultProps = {
  pageType: "idea",
};
export default UserPageTemplate;
