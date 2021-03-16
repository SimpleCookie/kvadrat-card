import React from "react"
import { Link, Redirect, useParams } from "react-router-dom"
import { kvadratare } from "./img"
import logotype from "./img/logotype.png"

const placeholder = "https://via.placeholder.com/414"
const employedLink = "https://www.kvadrat.se/aktuellt/kvadrat-sundsvall-forstarker-med-ny-affarsutvecklare/"
const consultantLink = "https://www.kvadrat.se/anlita-kvadrat/hitta-konsult/?q=&l=sundsvall#results"

export const Card = () => {
  const urlParams = useParams<{ name: string }>()
  const user = kvadratare.find(it => it.name === urlParams.name)

  if (!user) return <Redirect to="/" />
  return (
    <div className="background">
      <img src={user.img || placeholder} alt="Profilbild" className="photo" />
      <div className="logotype">
        <img src={logotype} alt="Logotyp" />
      </div>
      <div className="card">
        <h1>{user.name}</h1>
        <a href={user.employed ? employedLink : consultantLink}>Kvadrat Sundsvall</a>
      </div>
      <div className="tillbaka">
        <Link to="/">Tillbaka</Link>
      </div>
    </div>
  );
}
