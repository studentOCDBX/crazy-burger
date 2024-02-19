import Logo from '../../reusableUi/Logo.jsx'
import LoginForm from '../LoginForm.jsx'
import styled from 'styled-components'
import burgerImg from '../../../assets/burger-background.jpg'

const LoginPageStyled = styled.div`
    height: 100vh;
    /* background-image: url(${burgerImg});
    background-size: cover;
    background-position: center;
    background-blend-mode: darken; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${burgerImg});
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
`

function LoginPage() {
    // state (état, données)
    // Comportements
    //  Affichage(render)
    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
    )
}

export default LoginPage
