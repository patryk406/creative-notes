import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { routes } from "routes";
import { store, persistor } from "store";
import MainTemplate from "templates/MainTemplate";
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
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
