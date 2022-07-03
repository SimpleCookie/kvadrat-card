import { useEffect } from "react"
import { useState } from "react"
import { Kvadratare } from "../img"

const mapKvadratare = (k: any) => ({
  id: k.id,
  name: k.acf.name,
  img: k.acf.photo,
  employed: k.acf.employed,
})

const cardUrl = "https://kvadrat.devgroup.se/wp-json/acf/v3/kvadratare"

export const useKvadratare = (): [Kvadratare[], boolean, string | null] => {
  const [kvadratare, setKvadratare] = useState<Kvadratare[]>([])
  const [laddar, setLaddar] = useState(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch(cardUrl)
        const cards: any = await res.json()
        const mappedCards: Kvadratare[] = cards?.map(mapKvadratare)
        setKvadratare(mappedCards || [])
      } catch (error) {
        setError(error)
      } finally {
        setLaddar(false)
      }
    }
    fetchCards()
  }, [])

  return [kvadratare, laddar, error]
}
