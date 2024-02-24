import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../reusableUi/Logo.jsx'
import { BsPersonCircle } from 'react-icons/bs'
import theme from '../../../theme/index.js'

function NavBar() {
    // state (état, données)
    const { username } = useParams()

    // Comportements

    //  Affichage(render)
    return (
        <NavBarStyled>
            <Logo className="burger__logo" />
            <div className="navbar__wrapper">
                <div className="navbar__wrapper__body">
                    <p>
                        Hey,
                        <span>{username}</span>
                    </p>
                    <Link className="btn__link" to="/">
                        Se déconnecter
                    </Link>
                </div>
                <BsPersonCircle className="navbar__icon" />
            </div>
        </NavBarStyled>
    )
}

export default NavBar

const NavBarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    height: 11%;
    border-radius: 15px 15px 0 0;
    &.burger__logo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 240px;
        transform: none;
    }
    .navbar__wrapper {
        height: 44px;
        display: flex;
        align-items: center;
        gap: 1rem;
        .navbar__wrapper__body {
            display: flex;
            flex: 1;
            gap: 0.2rem;
            flex-direction: column;
            align-items: center;
            font-family: Open Sans;
            font-weight: 400;
            & p {
                display: flex;
                justify-content: center;
                font-size: 16px;
                line-height: 22px;
                gap: 0.5rem;
                margin: 0;
                & span {
                    font-weight: 700;
                    line-height: 22px;
                    color: ${theme.colors.primary};
                }
            }
            & .btn__link {
                width: 100%;
                line-height: 14px;
                letter-spacing: 0em;
                text-align: right;
            }
        }
        .navbar__icon {
            width: 36px;
            height: 36px;
            color: ${theme.colors.greyDark};
        }
    }
`
