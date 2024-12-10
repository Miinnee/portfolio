import { Link } from "react-router-dom";

function Header() {
    return ( 
        <div>
            <header>
                <h1> Portoflio de Thomas </h1>
                <Link to="/formation" style={{ textDecoration: 'none' }}>
                <button>Aller à la page Formation</button>
                </Link>
            </header>
        </div>
     );
}

export default Header;