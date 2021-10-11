import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainTemplate from "templates/MainTemplate";
import Sidebar from "components/organisms/Sidebar/Sidebar";
import Travels from "views/Travels";
import Creatives from "views/Creatives";
import Ideas from "views/Ideas";

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Ideas} />
          <Route path="/travel" component={Travels} />
          <Route path="/creative" component={Creatives} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
