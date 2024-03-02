import { useState } from 'react'
import styled from 'styled-components'
import fakeMenu2 from '../../../../fakeData/fakeMenu.js'
import PrimaryBtn from '../../../reusableUi/PrimaryBtn.jsx'
function Menu() {
    // state (état, données)
    const [menus, setMenus] = useState(fakeMenu2)

    // Comportements

    return (
        <MenuStyled>
            {menus.map((menu) => (
                <div className="card" key={menu.id}>
                    <div className="cardImgContainer">
                        <img src={menu.imageSource} alt={menu.title} />
                    </div>
                    <div className="cardBody">
                        <h1>{menu.title}</h1>
                        <div className="cardBodydescription">
                            <span> {menu.price} </span>
                            <PrimaryBtn
                                className="cardMenuPrimaryBtn"
                                content="Ajouter"
                            />
                        </div>
                    </div>
                </div>
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
    & .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #f06204;
        width: 240px;
        height: 330px;

        & .cardImgContainer {
            width: 90%;
            height: 50%;
            margin: 50px 20px 0 20px;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: center;
            }
        }
        & .cardBody {
            width: 90%;
            height: 30%;
            display: flex;
            flex-direction: column;
            margin: 15px 20px 10px 20px;

            h1 {
                margin: 0;
                font-family: 'Amatic SC';
                font-size: 36px;
                font-weight: 700;
                line-height: 45px;
                letter-spacing: 0em;
                text-align: left;
            }
            .cardBodydescription {
                height: 70%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                & .cardMenuPrimaryBtn {
                    width: 95px;
                    height: 38px;
                }
            }
        }
    }
`
