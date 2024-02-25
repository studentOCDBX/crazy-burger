import logoImg from '../../assets/logo-orange.png'
import styled from 'styled-components'
import theme from '../../theme/index.js'
import { Link } from 'react-router-dom'

const LogoStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    & :hover {
        cursor: pointer;
    }

    p {
        justify-content: center;
        color: ${theme.colors.primary};
        height: 46px;
        font-family: 'Amatic SC';
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.bold};
        text-transform: uppercase;
        line-height: 46px;
        text-align: center;
    }
    > :first-child {
        width: 73px;
    }
    > :last-child {
        width: 79px;
    }
    img {
        width: 80px;
        height: 60px;
    }
`

function Logo({ className }) {
    return (
        <LogoStyled className={className}>
            <p>crazee</p>
            <img src={logoImg} alt="Burger logo image" />
            <p>burger</p>
        </LogoStyled>
    )
}

export default Logo
