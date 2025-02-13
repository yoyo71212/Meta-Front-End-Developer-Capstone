import Nav from './Nav';
// import Logo from 'img/Logo.svg';

export default function Header() {
    return (
        <header className="header">
            <img src="/img/Logo.svg" alt="Little Lemon Logo" />

            <Nav />
        </header>
    );
}