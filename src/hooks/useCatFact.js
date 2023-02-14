import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"

export const useCatFact = () => {
    const [fact, setFact] = useState()
    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }
     //Recuperar el dato random
     useEffect(refreshFact, [])

     return { fact, refreshFact }
}