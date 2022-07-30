import './menu.css'
import { Link } from 'react-router-dom'


function Menu() {

    return (
        
        <ul className="menu">
            <li className="item-menu">
                <Link className="link" to="/">Quem Somos</Link> </li>
            <li className="item-menu">
                <Link className="link" to="/projeto">Hey, Mãe!</Link></li>
            <li className="item-menu">
                <Link className="link" to="/contatos">Junte-se a Nós</Link></li>
        </ul>
    )
}

export default Menu