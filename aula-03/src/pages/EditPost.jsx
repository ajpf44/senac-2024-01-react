import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import api from "../services/api";

const EditPost = () => {
    const [titulo, setTitulo] = useState("")
    const [mensagem, setMensagem] = useState("")

    const { idPost } = useParams()

    const getPostById = async() => {
        const { data } = await api.get("/posts/"+idPost)
        setMensagem(data.message)
        setTitulo(data.title)
    }

    useEffect(() => {
        getPostById()
    }, [])

    return (
        <>
            <h1>Editar POST</h1>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <label style={{ marginBottom: 10 }}>
                    <span>Título: </span>
                    <input value={titulo} onChange={e => setTitulo(e.target.value)} />
                </label>
                <label>
                    <span>Mensagem: </span>
                    <textarea value={mensagem} onChange={e => setMensagem(e.target.value)} />
                </label>
                <button type="button" onClick={()=>{}}>Salvar</button>
            </form>
        </>
    );
}

export default EditPost;