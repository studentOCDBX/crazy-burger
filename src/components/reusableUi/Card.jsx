import theme from '../../theme/index.js'
import PrimaryBtn from './PrimaryBtn.jsx'
import styled from 'styled-components'

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.white};
    width: 240px;
    height: 330px;
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
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
        & h1 {
            width: 185.57px;
            height: 46px;
            margin: 0;
            font-family: 'Amatic SC';
            font-size: ${theme.fonts.size.P4};
            font-weight: ${theme.fonts.weights.bold};
            line-height: 45px;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .cardBodydescription {
            height: 70%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            & .cardMenuPrimaryBtn {
                width: 95px;
                height: 38px;
                transition: all 0.5s ease;
                &:hover {
                    border: 1px solid ${theme.colors.primary};
                    background: ${theme.colors.white};
                }
                &:active {
                    background-color: ${theme.colors.primary};
                    color: ${theme.colors.white};
                }
            }
            & span {
                color: ${theme.colors.primary};
            }
        }
    }
`
function Card({ imageSource, title, productPrice }) {
    return (
        <CardStyled>
            <div className="cardImgContainer">
                <img src={imageSource} alt={`${title} image`} />
            </div>
            <div className="cardBody">
                <h1>{title}</h1>
                <div className="cardBodydescription">
                    <span> {productPrice} </span>{' '}
                    <PrimaryBtn
                        className="cardMenuPrimaryBtn"
                        content="Ajouter"
                    />
                </div>
            </div>
        </CardStyled>
    )
}
export default Card
