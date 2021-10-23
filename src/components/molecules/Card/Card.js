import styled, { css } from "styled-components";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";

import Paragraph from "components/atoms/Paragraph/Paragraph";
import Button from "components/atoms/Button/Button";
import Heading from "components/atoms/Heading/Heading";
import { removeItem as removeItemAction } from "actions";

import Merph from "assets/avatars/Merph.png";
import Nareth from "assets/avatars/Nareth.png";
import Osma from "assets/avatars/Osma.png";
import Seth from "assets/avatars/Seth.png";
import Bulb from "assets/icons/bulb.png";
import SmokeIcon from "assets/icons/smoke.png";
import withContext from "hoc/withContext";

const CART_TYPE = {
  creatives: "CREATIVES",
  ideas: "IDEAS",
  travels: "TRAVELS",
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
  height: 8rem;
  width: 8rem;
  border: 0.3rem solid ${({ theme }) => theme.ideas};
  position: absolute;
  right: 2.5rem;
  top: 2.5rem;
  border-radius: 5rem;
`;

const StyledMagic = styled.img`
  height: 5rem;
  width: 5rem;
  border: 0.3rem solid ${({ theme }) => theme.creatives};
  position: absolute;
  right: 2rem;
  top: 4rem;
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
const Card = ({
  id,
  pageContext,
  title,
  created,
  travelName,
  content,
  removeItem,
}) => {
  const [redirect, setRedirect] = useState(false);
  const handleCardClick = () => {
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to={`${pageContext}/${id}`} />;
  }

  return (
    <StyledWrapper onClick={handleCardClick}>
      <InnerWrapper activeColor={pageContext}>
        <StyledHeading>{title}</StyledHeading>
        <DateInfo>{created}</DateInfo>
        {pageContext === "travels" && <StyledAvatar src={Osma} />}
        {pageContext === "creatives" && <StyledMagic src={SmokeIcon} />}
        {pageContext === "ideas" && <StyledBulbButton href="/" />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <Button onClick={() => removeItem(pageContext, id)} secondary>
          remove
        </Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  pageContext: PropTypes.oneOf(["creatives", "ideas", "travels"]),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  travelName: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};
Card.defaultProps = {
  pageContext: "ideas",
  travelName: null,
};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});
export default connect(null, mapDispatchToProps)(withContext(Card));
