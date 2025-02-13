export default function Footer() {
    return (
        <footer className="footer">
            <img src="/img/Asset 20@4x.png" alt="Little Lemon Logo" />
            <nav>
                <ul className="footer-nav">
                    <li><h6>Doormat Navigation</h6></li>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/menu">MENU</a></li>
                    <li><a href="/reservations">RESERVATIONS</a></li>
                    <li><a href="/order-online">ORDER ONLINE</a></li>
                    <li><a href="/login">LOGIN</a></li>
                </ul>
            </nav>

            <nav>
                <ul className="footer-nav">
                    <li><h6>Contact</h6></li>
                    <li><a href="/address">Address</a></li>
                    <li><a href="/phone-number">Phone Number</a></li>
                    <li><a href="/email">Email</a></li>
                </ul>
            </nav>

            <nav>
                <ul className="footer-nav">
                    <li><h6>Social Media Links</h6></li>
                    <li><a href="/facebook">Facebook</a></li>
                    <li><a href="/instagram">Instagram</a></li>
                </ul>
            </nav>
        </footer>
    );
}