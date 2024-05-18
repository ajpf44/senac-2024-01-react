import { useState } from "react";

const AddPost = () => {
    const [texto, setText] =useState("");
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={ handleTextInput} />
                <button type="submit">Enviar</button>
            </form>

        </div> 
    );
}
 
export default AddPost;