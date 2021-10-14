import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import { routes } from "routes";
import store from "store";
import MainTemplate from "templates/MainTemplate";
import Sidebar from "components/organisms/Sidebar/Sidebar";
import Travels from "views/Travels";
import Creatives from "views/Creatives";
import Ideas from "views/Ideas";
import DetailsPage from "views/DetailsPage";
const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Sidebar />
          <Switch>
            <Route
              exact
              path={routes.home}
              render={() => <Redirect to="/ideas" />}
            />
            <Route exact path={routes.ideas} component={Ideas} />
            <Route path={routes.idea} component={DetailsPage} />
            <Route exact path={routes.travels} component={Travels} />
            <Route path={routes.travel} component={DetailsPage} />
            <Route exact path={routes.creatives} component={Creatives} />
            <Route path={routes.creative} component={DetailsPage} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
