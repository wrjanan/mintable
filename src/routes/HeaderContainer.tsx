import React, { ReactElement } from "react";
import { Route } from "react-router-dom";
import { MainHeader } from "../components/mainheader/MainHeader";

export type RoutePath = {
  name: string;
  path: string;
  container: ReactElement;
};

export const headerRoutePaths: { [path: string]: RoutePath } = {
  "home": { name: "Home", path: "/", container: <MainHeader /> },
  "raffle": { name: "Raffle", path: "/raffle", container: <MainHeader /> },
}

export const HeaderContainer: React.FC = (): ReactElement => {
  return (
    <>
      {Object.values(headerRoutePaths).map(routePath => {
        return (
          <Route key={routePath.path} path={routePath.path} element={routePath.container} />
        );
      })}
    </>
  );
};
