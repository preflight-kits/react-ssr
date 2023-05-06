import { About } from "../../views/About";
import { Home } from "../../views/Home";

export const routes = [
  {
    path: "/",
    element: Home,
    exact: true,
  },
  {
    path: "/about",
    element: About,
  },
];
