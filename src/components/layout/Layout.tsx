import { Outlet } from "react-router-dom";
import './Layout.css';

export function Layout() {
  return (
    <div>
      <main className="layout_main_body">
        <Outlet />
      </main>
    </div>
  );
}
