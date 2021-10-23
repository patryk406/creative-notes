import { useState, useEffect } from "react";
import DetailsTemplate from "templates/DetailsTemplate";
import { routes } from "routes";
import withContext from "hoc/withContext";
import { connect } from "react-redux";
import axios from "axios";

const DetailsPage = ({ activeItem, match }) => {
  const [detailItem, setDeatilItem] = useState({
    title: "",
    content: "",
    id: "",
  });

  useEffect(() => {
    if (activeItem) {
      setDeatilItem(activeItem[0]);
    } else {
      const { id } = match.params;
      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => setDeatilItem(data))
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <DetailsTemplate
      title={detailItem.title}
      content={detailItem.content}
      id={detailItem.id}
      key={detailItem.id}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(
        (activeItem) => activeItem._id === ownProps.match.params.id
      ),
    };
  }
  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
