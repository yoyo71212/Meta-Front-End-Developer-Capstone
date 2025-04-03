import Nav from './Nav';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src="/img/Logo.svg" alt="Little Lemon Logo" />
            </Link>

            <Nav />
        </header>
    );
}