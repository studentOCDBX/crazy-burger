import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../theme/index.js'
import { FaChevronRight } from 'react-icons/fa'
import Input from './Input.jsx'
import { BsPersonCircle } from 'react-icons/bs'

const LoginFormStyled = styled.form`
    width: 464px;
    height: 438px;
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
        font-size: ${theme.fonts.P4};
        line-height: 46px;
        margin-bottom: ${theme.fonts.P1};
    }
    hr {
        border: 1px solid ${theme.colors.primary};
        width: 400px;
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
        font-size: ${theme.fonts.P0};
        line-height: ${theme.fonts.P0};
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        cursor: pointer;
        &:hover {
            background-color: ${theme.colors.background_white};
            color: ${theme.colors.primary};
        }
    }
    @media screen and (max-width: 767px) {
        width: 100vw;
        h1 {
            font-size: ${theme.fonts.P4};
            line-height: ${theme.fonts.P1};
        }
        hr {
            width: 90%;
        }
        h2 {
            font-size: ${theme.fonts.P3};
            line-height: 23px;
        }
        button {
            width: 90%;
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
            <Input
                value={username}
                onChange={handleChange}
                placeholder={'Entrer votre prénom'}
                required
                Icon={<BsPersonCircle className="inputSvg" />}
            />

            <button>
                Accéder à mon espace
                <FaChevronRight />
            </button>
        </LoginFormStyled>
    )
}

export default LoginForm
