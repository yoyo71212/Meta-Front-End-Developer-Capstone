import Nav from './Nav';
import '../styles/Header.css';

export default function Header() {
    return (
        <header>
            <img src="/img/Logo.svg" alt="Little Lemon Logo" />

            <Nav />
        </header>
    );
}