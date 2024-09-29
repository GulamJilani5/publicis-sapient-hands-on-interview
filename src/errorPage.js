import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h1>Rout is not found</h1>
      <Link to="/">Go to home page</Link>
    </>
  );
}
