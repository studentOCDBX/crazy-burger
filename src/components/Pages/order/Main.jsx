import styled from 'styled-components'
import theme from '../../../theme/index.js'

function Main() {
    return <MainStyled className="main"></MainStyled>
}
export default Main

const MainStyled = styled.div`
    width: 100%;
    flex: 1;
    background-color: ${theme.colors.background_white};
    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`
