import styled from 'styled-components'
import theme from '../../theme/index.js'

const TextInputStyled = styled.div`
    width: 400px;
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
    margin-bottom: 18px;
    input {
        width: 324px;
        height: 19px;
        border: none;
        &::placeholder {
            color: ${theme.colors.greyLight};
            font-size: ${theme.fonts.size.P0};
            line-height: 17px;
        }
    }

    @media screen and (max-width: 767px) {
        width: 90%;
        input {
            width: 75%;
        }
    }
`

function TextInput({ value, onChange, Icon, ...otherProps }) {
    return (
        <TextInputStyled>
            {Icon && Icon}
            <input onChange={onChange} type="text" {...otherProps} />
        </TextInputStyled>
    )
}
export default TextInput
