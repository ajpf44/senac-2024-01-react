export default function MeuAlerta({ msg }) {

    const handleClick = () => {
        alert(msg)
    }

    return(
        <button onClick={handleClick}>Clique aqui!</button>
    )
}