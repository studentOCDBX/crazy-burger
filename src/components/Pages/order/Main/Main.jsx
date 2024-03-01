import styled from 'styled-components'
import theme from '../../../../theme/index.js'
import { useState } from 'react'
import fakeMenu2 from '../../../../fakeData/fakeMenu.js'
import Menu from './Menu.jsx'

function Main() {
    // state (état, données)
    const [menus, setMenus] = useState(fakeMenu2)
    // Comportements

    //  Affichage(render)
    return (
        <MainStyled>
            {/* <div className="orderbasket">basket</div> */}
            <Menu />
        </MainStyled>
    )
}
export default Main

const MainStyled = styled.div`
    width: 100%;
    flex: 1;
    background-color: ${theme.colors.background_white};
    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    //This code will be used for  ordebasket
    /* grid-template-columns: 25% 1fr; */
    grid-template-columns: 1fr;
    /* .orderbasket {
        background: #ee08ad;
    } */
`
