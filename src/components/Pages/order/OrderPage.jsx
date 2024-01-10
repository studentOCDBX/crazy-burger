import { Link, useParams } from "react-router-dom"

function OrderPage() {
    // state (état, données)
    const { username } = useParams()

    // Comportements

    //  Affichage(render) 
    return (
        <>
            <h1>Bonjour {username}</h1>
            <br />
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </>
    )
}
export default OrderPage