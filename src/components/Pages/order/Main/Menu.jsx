import { useState } from 'react'
import styled from 'styled-components'
import fakeMenu2 from '../../../../fakeData/fakeMenu.js'
function Menu() {
    // state (état, données)
    const [menus, setMenus] = useState(fakeMenu2)

    // Comportements

    return (
        <MenuStyled>
            {menus.map((menu) => (
                <div className="card"> {menu.title} </div>
            ))}
        </MenuStyled>
    )
}
export default Menu

const MenuStyled = styled.div`
    background: #275308;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    justify-items: center;
    padding: 50px 50px 150px;
    & .card {
        background: #f06204;
        width: 240px;
        height: 330px;
    }
`
