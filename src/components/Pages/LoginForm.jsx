import React, { useState } from 'react'

function LoginForm() {
    // state (état, données)
    const [name, setName] = useState("")

    // Comportements
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Bonjour ${name}`)
        setName("")
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    //  Affichage(render) 

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous!</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input type="text" required placeholder="Entrez votre prénom..." value={name} onChange={handleChange} />
            <button >Accéder à votre espace</button>
        </form>
    )
}

export default LoginForm