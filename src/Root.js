import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HandleTheme from "./theme";

export default function Root() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/card">Card</Link>
            </li>
          </ul>
        </nav>
        <HandleTheme />
      </header>
      <Outlet />
    </>
  );
}
