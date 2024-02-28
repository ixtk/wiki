import { Link } from "react-router-dom";

export const WikiLinks = ({ entries }) => {
  return (
    <ul>
      {entries.map((entry) => {
        return (
          <li key={entry.title}>
            <Link to={`/wiki/${entry.title}`}>{entry.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
