import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";
import { fetchItems } from "actions";
const Travels = ({ travels, fetchTravels }) => {
  const notesLenght = travels.length;
  useEffect(() => {
    fetchTravels();
  }, []);
  return (
    <GridTemplate length={notesLenght}>
      {travels.map(({ title, content, _id: id }) => (
        <Card id={id} title={title} content={content} key={id} />
      ))}
    </GridTemplate>
  );
};
Travels.propTypes = {
  travels: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
Travels.defaultProps = {
  travels: [],
};
const mapStateToProps = ({ travels }) => ({ travels });
const mapDispatchToProps = (dispatch) => ({
  fetchTravels: () => dispatch(fetchItems("travels")),
});
export default connect(mapStateToProps, mapDispatchToProps)(Travels);
