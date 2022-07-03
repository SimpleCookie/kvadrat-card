import React from "react"
import { Link, Redirect, useParams } from "react-router-dom"
import { links, placeholder } from "./config"
import { useKvadratare } from "./hooks/useKvadratare"
import logotype from "./img/logotype.png"

export const Card = () => {
  const urlParams = useParams<{ id: string }>()
  const [kvadratare, loading] = useKvadratare()

  const user = kvadratare.find((it) => {
    return it.id === +urlParams.id
  })

  if (loading) return <h1>Laddar ...</h1>
  if (!user) return <Redirect to="/" />
  return (
    <div className="background">
      <div className="profile">
        <img src={user.img || placeholder} alt="Profilbild" className="photo" />
        <div className="logotype">
          <img src={logotype} alt="Logotyp" />
        </div>
        <div className="card">
          <h1>{user.name}</h1>
          <a href={user.employed ? links.employees : links.consultants}>
            Kvadrat Sundsvall
          </a>
        </div>
        <div className="tillbaka">
          <Link to="/">Tillbaka</Link>
        </div>
      </div>
    </div>
  )
}
