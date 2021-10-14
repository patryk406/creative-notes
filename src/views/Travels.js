import { connect } from "react-redux";
import PropTypes from "prop-types";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";

const Travels = ({ travels }) => {
  return (
    <GridTemplate>
      {travels.map(({ title, travelName, content, created, id }) => (
        <Card
          id={id}
          title={title}
          travelName={travelName}
          content={content}
          created={created}
          key={id}
        />
      ))}
    </GridTemplate>
  );
};
Travels.propTypes = {
  travels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      travelName: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    })
  ),
};
Travels.defaultProps = {
  travels: [],
};
const mapStateToProps = ({ travels }) => ({ travels });

export default connect(mapStateToProps)(Travels);
