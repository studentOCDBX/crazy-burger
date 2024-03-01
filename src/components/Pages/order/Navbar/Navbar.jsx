import styled from 'styled-components'
import Logo from '../../../reusableUi/Logo.jsx'
import NavbarRightPart from './NavbarRightPart.jsx'
import reloadPage from '../../../../utils/window.jsx'
import theme from '../../../../theme/index.js'

function NavBar({ username }) {
    // state (état, données)

    // Comportements

    //  Affichage(render)
    return (
        <NavBarStyled>
            <Logo className="orderPage__Logo" onClick={reloadPage} />
            <NavbarRightPart username={username} />
        </NavBarStyled>
    )
}

export default NavBar

const NavBarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.white};
    height: 11%;
    border-radius: 15px 15px 0 0;
    padding: 0 70px 0 20px;
    .orderPage__Logo {
        cursor: pointer;
    }
    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 32px 0;
        height: auto;
    }
`
