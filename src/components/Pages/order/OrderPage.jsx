import styled from 'styled-components'
import theme from '../../../theme/index.js'
import NavBar from '../../reusableUi/NavBar.jsx'

function OrderPage() {
    // state (état, données)

    // Comportements

    //  Affichage(render)
    return (
        <OrderPageStyled>
            <div className="container">
                <NavBar />
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
        position: absolute;
        z-index: 1;
        display: flex;
        flex-direction: column;
        width: 92%;
        max-width: 1400px;
        height: 95vh;
        border-radius: 15px;
        .main {
            width: 100%;
            flex: 1;
            background-color: #fff;
            border-radius: 0px 0px 15px 15px;
            box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
        }
    }
`
