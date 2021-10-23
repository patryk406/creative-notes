import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";
import { fetchItems } from "actions";

const Ideas = ({ ideas, fetchIdeas }) => {
  useEffect(() => {
    fetchIdeas();
  }, []);
  return (
    <GridTemplate>
      {ideas.map(({ title, content, _id: id }) => (
        <Card id={id} title={title} content={content} key={id} />
      ))}
    </GridTemplate>
  );
};
Ideas.propTypes = {
  ideas: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
Ideas.defaultProps = {
  ideas: [],
};
const mapStateToProps = ({ ideas }) => ({ ideas });
const mapDispatchToProps = (dispatch) => ({
  fetchIdeas: () => dispatch(fetchItems("ideas")),
});
export default connect(mapStateToProps, mapDispatchToProps)(Ideas);
