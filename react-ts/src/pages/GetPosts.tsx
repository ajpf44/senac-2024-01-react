import React, { useState, useEffect, useContext } from 'react';
import api from '../services/api';
import { AuthCtx } from '../contexts/auth';
import { useNavigate } from 'react-router-dom'

type Posts = {
    id: string,
    title: string,
    messagem: string
}

const GetPosts = () => {
    const [posts, setPosts] = useState<Posts[]>([])
    const [postsFiltrados, setPostsFiltrados] = useState<Posts[]>([])
    const authCtx = useContext(AuthCtx);
    const navigate = useNavigate()

    console.log("Meu contexto: ", authCtx)

    const fetchPosts = async () => {
        const response = await api.get("/posts")
        setPosts(response.data);
        setPostsFiltrados(response.data)
        console.log(response.data)
    }

    const filtro = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filtrado = posts.filter( item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setPostsFiltrados(filtrado)
    }

    const trocarRota = () => {
        navigate("/add/"+"t123", {state: {minhaInfo: "Testando 123"}})
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return ( 
        <div>
            <h1>Página GetPosts</h1>
            <button onClick={trocarRota}>Ir para outra rota</button>
            <input placeholder='Faça sua busca' onChange={filtro} />
            {postsFiltrados.map(item => (
                <h3 key={item.id}>{item.title}</h3>
            ))}
        </div>
     );
}
 
export default GetPosts;