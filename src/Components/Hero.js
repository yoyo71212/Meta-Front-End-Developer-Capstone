import { Link } from "react-router-dom";
import "../styles/Hero.css";

export default function Hero() {
    return (
        <div className="hero">
            <div className="text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art.
                </p>
                <button>
                    <Link to="/reservations" style={{textDecoration: "none", color: "inherit"}}>
                        Reserve a Table
                    </Link>
                </button>
            </div>
            
            <img src="/img/restaurant chef B.jpg" alt="Chef" />
        </div>
    );
};