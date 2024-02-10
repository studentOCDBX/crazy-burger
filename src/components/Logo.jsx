import logoImg from '../assets/logo-orange.png'
import styled from 'styled-components'
import theme from '../theme/index.js'

const LogoStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    p {
        color: ${theme.colors.primary};
        height: 115px;
        font-family: 'Amatic SC';
        font-size: 110px;
        font-weight: ${theme.weights.bold};
        text-transform: uppercase;
        line-height: 115px;
        margin: 214px 0 0 0;
    }
    > :first-child {
        width: 205px;
    }
    > :last-child {
        width: 312px;
    }
    img {
        width: 200px;
        height: 150px;
        margin-top: 197px;
    }
`

function Logo() {
    return (
        <LogoStyled>
            <p>crazee</p>
            <img src={logoImg} alt="Burger logo image" />
            <p>burger</p>
        </LogoStyled>
    )
}

export default Logo
