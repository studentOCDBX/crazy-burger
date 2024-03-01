import Profile from './Profile.jsx'
import styled from 'styled-components'

function NavbarRightPart({ username }) {
    // state (état, données)

    // Comportements

    //  Affichage(render)
    return (
        <NavbarRightPartStyled>
            {/* <div className="admin__button">Admin Button</div> */}
            <Profile username={username} />
        </NavbarRightPartStyled>
    )
}
export default NavbarRightPart


const NavbarRightPartStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* .admin__button {
        background: pink;
        border: 2px solid purple;
    } */
`
