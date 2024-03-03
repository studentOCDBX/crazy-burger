import { useState } from 'react'
import styled from 'styled-components'
import fakeMenu2 from '../../../../fakeData/fakeMenu.js'
import Card from './Card.jsx'
function Menu() {
    // state (état, données)
    const [menus, setMenus] = useState(fakeMenu2)

    // Comportements

    return (
        <MenuStyled>
            {menus.map((menu) => (
                // <Product
                //     imageSource={menu.imageSource}
                //     price={menu.price}
                //     title={menu.title}
                //     key={menu.id}
                // />
                <Card {...menu} key={menu.id} />
            ))}
        </MenuStyled>
    )
}
export default Menu

const MenuStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    justify-items: center;
    padding: 50px 50px 150px;
    background: #f5f5f7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`
