import { useState } from "react";
import api from "../services/api";

const AddPost = () => {
    const [titulo, setTitulo] = useState("")
    const [mensagem, setMensagem] = useState("")

    const addPost = async() => {
        try {
            const { data } = await api.post("/posts", {
                title: titulo,
                message: mensagem
            })
            alert("Post Enviado com Sucesso")
            console.log(data)
            setMensagem("")
            setTitulo("")
        } catch(err) {
            console.log("Erro ao enviar a postagem. ",err)
        }
    }

    return ( 
        <>
            <h1>ADD POST</h1>
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                <label style={{marginBottom: 10}}>
                    <span>Título: </span>
                    <input value={titulo} onChange={e => setTitulo(e.target.value)}/>
                </label>
                <label>
                    <span>Mensagem: </span>
                    <textarea value={mensagem} onChange={e => setMensagem(e.target.value)}/>
                </label>
                <button type="button" onClick={addPost}>Enviar Post</button>
            </form>
        </>
     );
}
 
export default AddPost;