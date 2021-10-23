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
import LoginPage from "views/LoginPage";
import RegisterPage from "views/RegisterPage";
const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.register} component={RegisterPage} />
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
