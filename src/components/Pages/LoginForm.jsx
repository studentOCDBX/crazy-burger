import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    // state (état, données)
    const [username, setusername] = useState('')
    const navigate = useNavigate()

    // Comportements
    const handleSubmit = (e) => {
        e.preventDefault()
        setusername('')
        navigate(`order/${username}`)
    }

    const handleChange = (e) => {
        setusername(e.target.value)
    }

    //  Affichage(render)

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input
                type="text"
                required
                placeholder="Entrez votre prénom"
                value={username}
                onChange={handleChange}
            />
            <button>Accéder à mon espace</button>
        </form>
    )
}

export default LoginForm
