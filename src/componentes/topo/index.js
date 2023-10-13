import './style.css';
import {Link} from 'react-router-dom';

export default function Topo(){
    return(
        <header>
            <div className='menu'>
                <img src="assets/logo.png" alt="Logo da sorveteria" />
                <nav>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/sobremesa' className='link'>Sabores</Link>
                    <Link to='/sobre' className='link'>Sobre</Link>
                </nav>
            </div>
        </header>
    );
}