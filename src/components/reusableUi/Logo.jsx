import logoImg from '../../assets/logo-orange.png'
import styled from 'styled-components'
import theme from '../../theme/index.js'

const LogoStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transform: scale(3);

    p {
        justify-content: center;
        color: ${theme.colors.primary};
        height: 46px;
        font-family: 'Amatic SC';
        font-size: 36px;
        font-weight: ${theme.weights.bold};
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
        /* margin-top: 197px; */
    }
    @media screen and (max-width: 768px) {
        transform: scale(1.32);
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
