import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../theme/index.js'
import TextInput from '../reusableUi/TextInput.jsx'
import { BsPersonCircle } from 'react-icons/bs'
import PrimaryBtn from '../reusableUi/PrimaryBtn.jsx'
import { FaChevronRight } from 'react-icons/fa'

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
    .inputSvg {
        color: ${theme.colors.greyDark};
        width: ${theme.fonts.P0};
        height: ${theme.fonts.P0};
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
            <TextInput
                value={username}
                onChange={handleChange}
                placeholder={'Entrer votre prénom'}
                required
                Icon={<BsPersonCircle className="inputSvg" />}
            />
            <PrimaryBtn
                Icon={<FaChevronRight />}
                content={'accedez à mon espace'}
            />
        </LoginFormStyled>
    )
}

export default LoginForm
