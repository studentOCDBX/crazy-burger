import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../theme/index.js'
import { BsPersonCircle } from 'react-icons/bs'
import { FaChevronRight } from 'react-icons/fa'

const LoginFormStyled = styled.form`
    /* border: 1px solid white; */
    width: 464px;
    height: 438px;
    margin: 0 525px 0 449px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Amatic SC';
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};
    h1 {
        font-size: 48px;
        line-height: 61px;
        margin-bottom: 32px;
    }
    h2 {
        font-size: 36px;
        line-height: 46px;
        margin-bottom: 18px;
    }
    hr {
        border: 1px solid ${theme.colors.primary};
        width: 400px;
    }
    .inputWrapper {
        width: 400px;
        height: 55px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background-color: ${theme.colors.white};
        border-radius: 5px;
        margin-bottom: 18px;
        input {
            width: 324px;
            height: 19px;
        }
    }
    .inputSvg {
        color: ${theme.colors.dark};
        width: 15px;
        height: 15px;
    }
    button {
        border: 1px;
        border-radius: 5px;
        width: 400px;
        height: 55px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        font-family: Arial;
        font-weight: ${theme.weights.bold};
        font-size: 15px;
        line-height: 15px;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        cursor: pointer;
        &:hover {
            background-color: ${theme.colors.background_white};
            color: ${theme.colors.primary};
        }
    }
`

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
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <div className="inputWrapper">
                <BsPersonCircle className="inputSvg" />
                <input
                    type="text"
                    required
                    placeholder="Entrez votre prénom"
                    value={username}
                    onChange={handleChange}
                />
            </div>
            <button>
                Accéder à mon espace
                <FaChevronRight />
            </button>
        </LoginFormStyled>
    )
}

export default LoginForm
