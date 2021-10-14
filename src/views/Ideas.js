import { connect } from "react-redux";
import PropTypes from "prop-types";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";

const Ideas = ({ ideas }) => {
  return (
    <GridTemplate>
      {ideas.map(({ title, content, created, id }) => (
        <Card
          id={id}
          title={title}
          content={content}
          created={created}
          key={id}
        />
      ))}
    </GridTemplate>
  );
};
Ideas.propTypes = {
  ideas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    })
  ),
};
Ideas.defaultProps = {
  ideas: [],
};
const mapStateToProps = ({ ideas }) => ({ ideas });
export default connect(mapStateToProps)(Ideas);
