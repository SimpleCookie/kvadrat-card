import { Kvadratare } from "./img";
import { Link } from "react-router-dom";
import { useKvadratare } from "./hooks/useKvadratare";

import "./App.scss";
import { ErrorPage } from "./pages/error.page";

export const Home = () => {
  const [kvadratare, loading, error] = useKvadratare();

  if (loading) {
    return <div>Laddar ...</div>;
  }

  if (error) {
    return <ErrorPage error={JSON.stringify(error)} />;
  }

  return (
    <nav className="background">
      <ol className="user-list">
        {kvadratare.map((it) => (
          <li key={it.name} className="user-list-item">
            <Link to={`card/${it.name}`}>{it.name}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};
