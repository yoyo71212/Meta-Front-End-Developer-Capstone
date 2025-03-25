import "../styles/Testimonials.css";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    const testimonials = [
        {
            "name": "Sophia Bennett",
            "testimonial": "The Pasta Alfredo at Little Lemon was creamy and rich—each bite melted in my mouth. A comforting classic done right.",
            "rating": 5
        },
        {
            "name": "Ethan Hayes",
            "testimonial": "I tried the Lemon Tart and it was absolutely divine. The perfect balance of tangy citrus and sweet pastry—highly recommend!",
            "rating": 4
        },
        {
            "name": "Grace Miller",
            "testimonial": "Little Lemon’s pizza had an amazing crust—light, airy, and crispy with just the right amount of toppings. Pure perfection.",
            "rating": 5
        }
    ];

    return (
        <div className="container">
            <h1>Testimonials</h1>
            <div className="card-container">
                {
                    testimonials.map(({name, testimonial, rating}) => {
                        return (
                            <TestimonialCard name={name} rating={rating} testimonial={testimonial} />
                        );
                    })
                }
            </div>
        </div>
    );
};