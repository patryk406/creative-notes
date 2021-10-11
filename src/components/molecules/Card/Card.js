import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Button from "components/atoms/Button/Button";
import Heading from "components/atoms/Heading/Heading";
import Avatar1 from "assets/avatars/avatar3.png";
import Bulb from "assets/icons/bulb.png";
const CART_TYPE = {
  note: "NOTE",
  ideas: "IDEAS",
  article: "ARTICLE",
};

const StyledWrapper = styled.div`
  min-height: 38rem;
  box-shadow: 0 1rem 3rem -1rem hsla(0, 0%, 0%, 0.1);
  border-radius: 20px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 1.7rem 3rem;
  background: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : "white"};

  :first-of-type {
    z-index: 999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  height: 80px;
  width: 80px;
  border: 3px solid ${({ theme }) => theme.idea};
  position: absolute;
  right: 2.5rem;
  top: 2.5rem;
  border-radius: 5rem;
`;
const StyledBulbButton = styled.a`
  display: block;
  width: 4.7rem;
  height: 4.7rem;
  border-radius: 5rem;
  position: absolute;
  right: 2.5rem;
  top: 2.5rem;
  background: white url(${Bulb}) no-repeat;
  background-size: 60%;
  background-position: 50%;
`;
const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello Patric</StyledHeading>
      <DateInfo>9 August</DateInfo>
      {cardType === "travel" && <StyledAvatar src={Avatar1} />}
      {cardType === "idea" && <StyledBulbButton href="/" />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos
        aliquid iste nulla, suscipit molestias eos ea est porro nihil eveniet
        laudantium. Natus exercitationem ex asperiores numquam ea, illo
        voluptates?
      </Paragraph>
      <Button secondary>remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(["cretive", "idea", "travel"]),
};
Card.defaultProps = {
  cardType: "idea",
};
export default Card;
