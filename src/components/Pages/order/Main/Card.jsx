import PrimaryBtn from '../../../reusableUi/PrimaryBtn.jsx'
import styled from 'styled-components'

function Card({ imageSource, title, price }) {
    return (
        <CardStyled>
            <div className="cardImgContainer">
                <img src={imageSource} alt={`${title} image`} />
            </div>
            <div className="cardBody">
                <h1>{title}</h1>
                <div className="cardBodydescription">
                    <span> {price} </span>{' '}
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

const CardStyled = styled.div`
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
`
