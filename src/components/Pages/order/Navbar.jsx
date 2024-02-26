import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../reusableUi/Logo.jsx'
import NavbarRightPart from './NavbarRightPart.jsx'
import { useParams } from 'react-router-dom'

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
            <NavbarRightPart username={username} />
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
`
