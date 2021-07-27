import { useEffect } from "react"
import { useState } from "react"
import { Kvadratare } from "../img"

const mapKvadratare = (i: any) => ({
  name: i.name,
  img: i.photo.url,
  employed: i.employed,
})

const cardUrl = "https://kvadrat.devgroup.se/wp-json/acf/v3/cards"

export const useKvadratare = (): [Kvadratare[], boolean, string | null] => {
  const [kvadratare, setKvadratare] = useState<Kvadratare[]>([])
  const [laddar, setLaddar] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch(cardUrl)
        const acf: any = res.body
        console.log(res)
        const hamtadeKvadratare: Kvadratare[] = acf?.map(mapKvadratare)
        setKvadratare(hamtadeKvadratare || [])
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
