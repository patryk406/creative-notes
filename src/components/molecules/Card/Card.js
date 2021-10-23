import styled, { css } from "styled-components";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";

import Paragraph from "components/atoms/Paragraph/Paragraph";
import Button from "components/atoms/Button/Button";
import Heading from "components/atoms/Heading/Heading";
import { removeItem as removeItemAction } from "actions";

import Nareth from "assets/avatars/Nareth.png";
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

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  height: 6rem;
  width: 6rem;
  border: 0.3rem solid ${({ theme }) => theme.travels};
  position: absolute;
  right: 1rem;
  top: 4.5rem;
  border-radius: 5rem;
`;

const StyledMagic = styled.img`
  height: 4.8rem;
  width: 4.8rem;
  position: absolute;
  right: 1rem;
  bottom: 2rem;
`;

const StyledBulbButton = styled.i`
  display: block;
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: white url(${Bulb}) no-repeat;
  background-size: 60%;
  background-position: 50%;
`;
const StyledRemoveButton = styled(Button)`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.warning};
  }
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
    <StyledWrapper>
      <InnerWrapper onClick={handleCardClick} activeColor={pageContext}>
        <StyledHeading>{title}</StyledHeading>
        {pageContext === "travels" && <StyledAvatar src={Nareth} />}
        {pageContext === "ideas" && <StyledBulbButton />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <StyledRemoveButton
          onClick={() => removeItem(pageContext, id)}
          secondary
        >
          remove
        </StyledRemoveButton>
        {pageContext === "creatives" && <StyledMagic src={SmokeIcon} />}
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  pageContext: PropTypes.oneOf(["creatives", "ideas", "travels"]),
  title: PropTypes.string.isRequired,
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
