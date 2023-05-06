import { Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { createElement } from "react";

export const RouterProvider = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} path={route.path} exact={route.exact || false}>
          {createElement(route.element)}
        </Route>
      ))}
    </Switch>
  );
};
