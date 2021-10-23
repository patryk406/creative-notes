import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";
import { fetchItems } from "actions";

const Creatives = ({ creatives, fetchCreatives }) => {
  useEffect(() => {
    fetchCreatives();
  }, []);
  return (
    <GridTemplate>
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
