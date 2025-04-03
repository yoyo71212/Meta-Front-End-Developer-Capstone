import { useNavigate } from 'react-router-dom';
import '../styles/Popup.css';

export default function Popup({submitted, setSubmitted}) {
    const navigate = useNavigate();

    const handleClick = () => {
        setSubmitted(!submitted);
        navigate("/");
    };

    return (
        <div className="popup-container">
            <h1>Reservation Successful!</h1>
            <p>You have successfully reserved a table. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!</p>
            <button onClick={handleClick}>Close</button>
        </div>
    );
};