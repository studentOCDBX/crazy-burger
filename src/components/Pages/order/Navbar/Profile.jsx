import styled from 'styled-components'
import theme from '../../../../theme/index.js'
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Profile({ username }) {
    return (
        <ProfileStyled>
            <div className="user__profile__body">
                <p>
                    Hey,
                    <span>{username}</span>
                </p>
                <Link className="btn__link" to="/">
                    Se déconnecter
                </Link>
            </div>
            <BsPersonCircle className="user__picture" />
        </ProfileStyled>
    )
}
export default Profile

const ProfileStyled = styled.div`
    height: 44px;
    display: flex;
    align-items: center;
    gap: 1rem;
    .user__profile__body {
        display: flex;
        flex: 1;
        gap: 0.2rem;
        flex-direction: column;
        align-items: center;
        font-weight: ${theme.fonts.weights.regular};
        & p {
            display: flex;
            justify-content: center;
            font-size: 16px;
            line-height: 22px;
            gap: 0.5rem;
            margin: 0;
            & span {
                font-weight: ${theme.fonts.weights.bold};
                line-height: 22px;
                color: ${theme.colors.primary};
            }
        }
        & .btn__link {
            width: 100%;
            line-height: 14px;
            text-align: right;
            text-decoration: none;
            &:hover {
                padding-bottom: 8px;
                border-bottom: 2px solid ${theme.colors.greyMedium};
            }
        }
    }
    .user__picture {
        width: 36px;
        height: 36px;
        color: ${theme.colors.greyDark};
    }
`
