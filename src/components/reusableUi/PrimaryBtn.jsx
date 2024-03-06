import styled from 'styled-components'
import theme from '../../theme/index.js'

const PrimaryBtnStyled = styled.button`
    border: 1px;
    border-radius: ${theme.borderRadius.round};
    width: 400px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    font-family: Arial;
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.P0};
    line-height: ${theme.fonts.size.P0};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    cursor: pointer;
    &:hover {
        background-color: ${theme.colors.background_white};
        color: ${theme.colors.primary};
    }
    @media screen and (max-width: 767px) {
        width: 90%;
    }
`

function PrimaryBtn({ content, Icon, className }) {
    return (
        <PrimaryBtnStyled className={className}>
            {content}
            {Icon && Icon}
        </PrimaryBtnStyled>
    )
}
export default PrimaryBtn
