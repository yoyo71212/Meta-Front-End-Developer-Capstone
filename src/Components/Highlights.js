import "../styles/Highlights.css";
import SpecialCard from "./SpecialCard";

export default function Highlights() {
    const specials = [
        {
            name: "Greek Salad",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99
        },
        {
            name: "Bruschetta",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            price: 5.99
        },
        {
            name: "Lemon Dessert",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: 5.00
        }
    ];

    return (
        <>
            <div className="special-header">
                <h1>Specials</h1>
                <button>Online Menu</button>
            </div>

            <div className="special-container">
                { specials.map(({ name, description, price }) => {
                    return (
                        <SpecialCard name={name} description={description} price={price} />
                    );
                }) }
            </div>
        </>
    );
};