import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../screens/Main";
import Raffle from "../screens/raffle/Raffle";

export type RoutePath = {
  name: string;
  path: string;
  container: ReactElement;
};

export const routePaths: { [path: string]: RoutePath } = {
  "home": { name: "Home", path: "/", container: <Main /> },
  "raffle": { name: "Raffle", path: "/raffle", container: <Raffle /> },
}

export const RouteContainer: React.FC = (): ReactElement => {
  const availableRoutes = Object.values(routePaths);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {availableRoutes.map(routePath => {
            return (
              <Route key={routePath.path}
                path={routePath.path} element={routePath.container} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};
