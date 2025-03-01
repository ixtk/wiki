import { Link } from "react-router"

export const WikiLinks = ({ entries }) => {
  return (
    <ul>
      {entries.map((entry) => {
        return (
          <li key={entry.id}>
            <Link to={`/entries/${entry.id}`}>{entry.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}
