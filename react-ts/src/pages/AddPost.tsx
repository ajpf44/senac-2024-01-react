import { useState } from "react";
import api from "../services/api";
import { useNavigate, useLocation, useParams } from 'react-router-dom'

const AddPost = () => {
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("");
    const navigate = useNavigate()
    const { state } = useLocation()
    const { id } = useParams()

    console.log("Infos: ", state?.minhaInfo)

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await api.post("/posts", {
                title: title,
                messagem: message
            })

            navigate("/")
        } catch(err) {
            console.log("Erro ao enviar o POST. ",err)
        }


    }

    // const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setText(e.target.value)
    // }

    const handleLocalStorage = () => {
        let local = localStorage.getItem('produto')
        
        if(local){
           local = JSON.parse(local)
        }
        
        console.log(typeof local)
        console.log(local)
    }

    return (
        <div>
            <h1>ID: {id}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder="Digite o Título"/>
                <br />
                <textarea onChange={e => setMessage(e.target.value)} value={message} placeholder="Digite a Mensagem"/>
                <br />
                <button type="submit">Enviar</button>
            </form>

            <button onClick={handleLocalStorage}>TESTE LOCAL STORAGE</button>

        </div>
    );
}

export default AddPost;