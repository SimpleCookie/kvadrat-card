import { links } from "../config"

interface Props {
  error: string
}

export const ErrorPage = ({error}: Props) => {
  return (
    <div>
      <h1>Något är knas, {error}</h1>
      <h2>Relevanta länkar</h2>
      <ul>
        <li>
          <a href={links.consultants} target="_blank" rel="noopener noreferrer" style={{ color: "#DDD"}}>
            Konsulter
          </a>
        </li>
        <li>
          <a href={links.employees} target="_blank" rel="noopener noreferrer" style={{ color: "#DDD"}}>
            Anställda
          </a>
        </li>
      </ul>
    </div>
  )
}
