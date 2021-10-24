import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import DetailsTemplate from "templates/DetailsTemplate";
import withContext from "hoc/withContext";

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
