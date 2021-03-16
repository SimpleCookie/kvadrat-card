import React from "react"
import { Link, Redirect, useParams } from "react-router-dom"
import { kvadratare } from "./img"
import logotype from "./img/logotype.png"

export const Card = () => {
  const urlParams = useParams<{ name: string }>()
  const user = kvadratare.find(it => it.name === urlParams.name)

  console.log(user)

  if (!user) return <Redirect to="/" />
  return (
    <div className="background">
      <img src={user.img} alt="Profilbild" className="photo" />
      <div className="logotype">
        <img src={logotype} alt="Logotyp" />
      </div>
      <div className="card">
        <h1>{user.name}</h1>
        <a href="https://www.kvadrat.se/anlita-kvadrat/hitta-konsult/?q=&l=sundsvall#results">Kvadrat Sundsvall</a>
      </div>
      <div className="tillbaka">
      <Link to="/">Tillbaka</Link>
      </div>
    </div>
  );
}
