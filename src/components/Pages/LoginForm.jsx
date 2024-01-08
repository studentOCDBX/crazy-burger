import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    // state (état, données)
    const [name, setName] = useState("")
    const navigate = useNavigate()

    // Comportements
    const handleSubmit = (e) => {
        e.preventDefault()
        setName("")
        navigate(`order/${name}`)
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
        </form >
    )
}

export default LoginForm