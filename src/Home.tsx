import { kvadratare } from "./img"
import { Kvadratare } from "./img";
import { Link } from "react-router-dom";

import './App.scss';

export const Home = () => {
  return (
    <nav className="background">
      <ol className="user-list">
        {kvadratare.map((it: Kvadratare) => (
          <li key={it.name} className="user-list-item">
            <Link to={`card/${it.name}`}>
              {it.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

