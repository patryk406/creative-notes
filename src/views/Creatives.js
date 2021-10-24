import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchItems } from "actions";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";

const Creatives = ({ creatives, fetchCreatives }) => {
  const notesLenght = creatives.length;
  useEffect(() => {
    fetchCreatives();
  }, []);

  return (
    <GridTemplate length={notesLenght}>
      {creatives.map(({ title, content, _id: id }) => (
        <Card id={id} title={title} content={content} key={id} />
      ))}
    </GridTemplate>
  );
};

Creatives.propTypes = {
  creatives: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

Creatives.defaultProps = {
  creatives: [],
};

const mapStateToProps = ({ creatives }) => ({ creatives });
const mapDispatchToProps = (dispatch) => ({
  fetchCreatives: () => dispatch(fetchItems("creatives")),
});

export default connect(mapStateToProps, mapDispatchToProps)(Creatives);
