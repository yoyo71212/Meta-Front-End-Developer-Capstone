import { Link } from "react-router-dom";

export default function FooterNav() {
    return (
        <div className="footer-nav">
            <nav id="footer-nav-1">
                <ul>
                    <li><h6>Doormat Navigation</h6></li>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/menu">MENU</Link></li>
                    <li><Link to="/reservations">RESERVATIONS</Link></li>
                    <li><Link to="/order-online">ORDER ONLINE</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                </ul>
            </nav>

            <nav id="footer-nav-2">
                <ul>
                    <li><h6>Contact</h6></li>
                    <li><Link to="/address">Address</Link></li>
                    <li><Link to="/phone-number">Phone Number</Link></li>
                    <li><Link to="/email">Email</Link></li>
                </ul>
            </nav>

            <nav id="footer-nav-3">
                <ul>
                    <li><h6>Social Media Links</h6></li>
                    <li><Link to="/facebook">Facebook</Link></li>
                    <li><Link to="/instagram">Instagram</Link></li>
                </ul>
            </nav>
        </div>
    );
}