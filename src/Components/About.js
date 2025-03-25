import "../styles/About.css";

export default function About() {
    return (
        <div className="about">
            <div className="about-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art. Crafted by expert chefs with locally-sourced ingredients, our dishes not only delight the palate but nourish the soul. Whether you're seeking a romantic dinner, a family meal, or a relaxed atmosphere with friends, Little Lemon is your ideal culinary destination. Find us in the heart of Chicago for an unforgettable experience.
                </p>
            </div>

            <div className="about-imgs">
                <img src="/img/restaurantfood.jpg" alt="food" height={200} width={200} className="front" />
                <img src="/img/restaurant.jpg" alt="restaurant" height={200} width={200} className="back" />
                {/* <img src="/img/restaurantfood.jpg" alt="food" className="front" />
                <img src="/img/restaurant.jpg" alt="restaurant" className="back" /> */}
            </div>
        </div>
    );
};