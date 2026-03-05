import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout";
import { Login } from "../pages";

export function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Login/>}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}