import { useState } from 'react'

export default function Login() {
    const[email, setEmail] = useState("")
    const[passwd, setPasswd] = useState("")
    const[switchType, setswitchType] = useState("password")

    const handleLogin = (event) => {
        event.preventDefault()
        alert("Você logou com o email "+email)
    }

    const handleSwitchType = () => {
        setswitchType(type => type == "password" ? "text" : "password")
    }

    return(
        <div>
            <h1>Página de Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    <span>Email</span>
                    <input 
                        type="text"
                        placeholder="Digite seu Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor='senha'>Senha:</label>
                <input 
                    id='senha'
                    type={switchType}
                    placeholder="Digite sua senha"
                    value={passwd}
                    onChange={(e) => setPasswd(e.target.value)}
                />
                <button type='submit'>Entrar no Sistema</button>
            </form>
            {/* <button onClick={handleLogin}>Entrar no Sistema</button> */}
            <button onClick={handleSwitchType}>{switchType == "password" ? "Ver Senha" : "Ocultar Senha"}</button>
        </div>
    )
}