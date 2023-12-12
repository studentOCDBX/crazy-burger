import { useState } from "react"

function LoginPage() {
    // state (état, données)
    const [name, setName] = useState("")

    // Comportements
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Bonjour ${name}`)
        setName("")

        // 1-copie du state.
        // 2-manipulation de la copie du state.
        // 3-Modification du state avec le setter dédié.
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    //  Affichage(render) 
    return (
        <div>
            <h1>Bienvenue chez nous!</h1>
            <br />
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input type="text" required placeholder="Entrez votre prénom..." value={name} onChange={handleChange} />
                <button >Accéder à votre espace</button>
            </form>
        </div>
    )
}

export default LoginPage