import styled from 'styled-components'
import theme from '../../theme/index.js'

const InputStyled = styled.div`
    width: 400px;
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: ${theme.colors.white};
    border-radius: 5px;
    margin-bottom: 18px;
    input {
        width: 324px;
        height: 19px;
        border: none;
    }
    .inputSvg {
        color: ${theme.colors.greyDark};
        width: ${theme.fonts.P0};
        height: ${theme.fonts.P0};
    }
    @media screen and (max-width: 767px) {
        width: 90%;
        input {
            width: 75%;
        }
    }
`

function Input({ value, onChange, Icon, ...otherProps }) {
    return (
        <InputStyled>
            {Icon && Icon}
            <input onChange={onChange} type="text" {...otherProps} />
        </InputStyled>
    )
}
export default Input
