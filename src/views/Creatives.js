import { connect } from "react-redux";
import PropTypes from "prop-types";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";

const Creatives = ({ creatives }) => {
  return (
    <GridTemplate>
      {creatives.map(({ title, content, created, id }) => (
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
Creatives.propTypes = {
  creatives: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    })
  ),
};
Creatives.defaultProps = {
  creatives: [],
};
const mapStateToProps = ({ creatives }) => ({ creatives });
export default connect(mapStateToProps)(Creatives);
