import { useEffect, useState } from 'react';
import '../styles/Reserve.css';
import BookingForm from './BookingForm';
import { submitAPI } from '../utils/API';
import Popup from './Popup';

export default function BookingPage({ availableTimes, availableTimesDispatch }) {
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState({
        date: "",
        time: "",
        guests: 0,
        occasion: ""
    });
    
    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleChange = (e) => {
        if (e.target.name === 'date') {
            availableTimesDispatch({type: "UPDATE", date: e.target.value});
        }
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(submitAPI(data));
        console.log("Form Submitted! :)");
    }
    
    return (
        <div className='reserve-container'>
            <h1>Table Reservation</h1>
            <BookingForm data={data} handleChange={handleChange} handleSubmit={handleSubmit} availableTimes={availableTimes} availableTimesDispatch={availableTimesDispatch} />
            { submitted && <Popup submitted={submitted} setSubmitted={setSubmitted} /> }
        </div>
    );
};