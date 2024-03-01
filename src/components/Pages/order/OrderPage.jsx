import styled from 'styled-components'
import theme from '../../../theme/index.js'
import NavBar from './Navbar/Navbar.jsx'
import { useParams } from 'react-router-dom'
import Main from './Main.jsx'

function OrderPage() {
    // state (état, données)
    const { username } = useParams()

    // Comportements

    //  Affichage(render)
    return (
        <OrderPageStyled>
            <div className="container">
                <NavBar username={username} />
                <Main />
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
    .container {
        display: flex;
        flex-direction: column;
        width: 92%;
        max-width: 1400px;
        height: 95vh;
        border-radius: 15px;
    }
`
