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
    border-radius: 5px;
    margin-bottom: 18px;
    input {
        width: 324px;
        height: 19px;
        border: none;
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
