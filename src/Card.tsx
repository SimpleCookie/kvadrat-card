import React from "react"
import { Link, Redirect, useParams } from "react-router-dom"
import { links, placeholder } from "./config"
import { kvadratare } from "./img"
import logotype from "./img/logotype.png"

export const Card = () => {
  const urlParams = useParams<{ name: string }>()
  const user = kvadratare.find((it) => it.name === urlParams.name)

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
