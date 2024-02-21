import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../../theme/index.js'

function OrderPage() {
    // state (état, données)
    const { username } = useParams()

    // Comportements

    //  Affichage(render)
    return (
        <OrderPageStyled>
            <div className="container">
                <div className="navbar">
                    navbar
                    <h1>Bonjour {username}</h1>
                    <br />
                    <Link to="/">
                        <button>Déconnexion</button>
                    </Link>
                </div>
                <div className="main">Main</div>
            </div>
        </OrderPageStyled>
    )
}
export default OrderPage
const OrderPageStyled = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .container {
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        width: 92%;
        max-width: 1400px;
        height: 95vh;
        position: absolute;
        z-index: 1;
        border-radius: 15px;

        .main {
            width: 100%;
            flex: 1;
            background-color: #fff;
            border-radius: 0px 0px 15px 15px;
            box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
        }
    }
    .navbar {
        /* border: 1px solid black; */
        background-color: green;
        height: 11%;
        border-radius: 15px 15px 0 0;
    }
`
