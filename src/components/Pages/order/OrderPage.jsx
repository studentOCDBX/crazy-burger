import { Link, useParams } from "react-router-dom"

function OrderPage() {
    const { name } = useParams()
    return (
        <>
            <div>OrderPage</div>
            <h1>Bonjour {name}</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </>
    )
}
export default OrderPage