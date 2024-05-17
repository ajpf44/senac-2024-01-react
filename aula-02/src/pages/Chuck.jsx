import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Chuck() {
    const [joke, setJoke] = useState("")
    const [loading, setLoading] = useState(true)
    const URL_API = "https://api.chucknorris.io/jokes/random"

    const getJoke = async () => {
       setLoading(true)
       try{
           const { data } = await axios.get(URL_API)
           setJoke(data.value)
       } catch(err) {
        console.log(err)
       }
       setLoading(false)
    }

    useEffect(() => {
        getJoke()
    }, [])

    // if(loading) {
    //     return <h1>CARREGANDO...</h1>
    // }

    const load = () => {
        return (
            <h2>Carregando</h2>
        )
    }

    return (
        <div>
            <h1>CHUCK SAYS...</h1>
            {load()}
            <h2>{joke}</h2>
            {loading && <h2>Carregando</h2>}
            {/* <h2>{loading ? <h1>CARREGANDO...</h1> : joke}</h2> */}
            <button 
                disabled={loading} 
                onClick={getJoke}
            >
            { loading ? "Carregando..." :  "Me conte uma piada!"}
            </button>
        </div>
    )
}