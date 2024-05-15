import { Link } from "react-router-dom"

const Header = () =>{
    return(
        <nav>
            <Link to='/'>Home</Link>
            <span>|</span>
            <Link to='sobre'>Sobre</Link>
            <span>|</span>
            <Link to='contato'>Contato</Link>
        </nav>
    )
}
export default Header;