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
            <Link to="#">
                <Logo />
            </Link>
            <div className="navbar__rightPart">
                {/* <div className="admin__button">Admin Button</div> */}
                <div className="user__profile">
                    <div className="user__profile__body">
                        <p>
                            Hey,
                            <span>{username}</span>
                        </p>
                        <Link className="btn__link" to="/">
                            Se déconnecter
                        </Link>
                    </div>
                    <BsPersonCircle className="user__picture" />
                </div>
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
    padding: 0 70px 0 20px;
    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 32px 0;
        height: auto;
    }
    .user__profile {
        height: 44px;
        display: flex;
        align-items: center;
        gap: 1rem;
        .user__profile__body {
            display: flex;
            flex: 1;
            gap: 0.2rem;
            flex-direction: column;
            align-items: center;
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
                text-align: right;
                &:hover {
                    padding-bottom: 8px;
                    border-bottom: 2px solid ${theme.colors.greyMedium};
                }
            }
        }
        .user__picture {
            width: 36px;
            height: 36px;
            color: ${theme.colors.greyDark};
        }
    }
    .navbar__rightPart {
        display: flex;
        justify-content: center;
        align-items: center;
        .admin__button {
            background: pink;
            border: 2px solid purple;
        }
    }
`
