import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../reusableUi/Logo.jsx'
import { BsPersonCircle } from 'react-icons/bs'
import theme from '../../../theme/index.js'
import Profile from './Profile.jsx'

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
                <Profile />
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
    /* .navbar__rightPart {
        display: flex;
        justify-content: center;
        align-items: center;
        .admin__button {
            background: pink;
            border: 2px solid purple;
        }
    } */
`
