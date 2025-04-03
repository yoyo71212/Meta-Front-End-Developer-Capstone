import { Routes, Route } from 'react-router-dom';
import BookingPage from "./BookingPage";
import HomePage from "./HomePage";
import { useEffect, useReducer } from 'react';
import NotFound from './NotFound';
import { fetchAPI } from '../utils/API';

export default function Main() {
    const initializeTimes = (initialAvailableTimes) => [
        ...initialAvailableTimes,
        ...fetchAPI(new Date()),
    ];

    const updateTimes = (state, action) => {
        switch (action.type) {
            case "UPDATE":
                const response = fetchAPI(new Date(action.date));
                return response.length !== 0 ? response : state;
            default:
                return state;
        }
    }
    
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    
    useEffect(() => {
        console.log(availableTimes);
    }, [availableTimes]);

    return (
        <main>
            <Routes className="main">
                <Route path='/' element={<HomePage />} />
                <Route path='/reservations' element={<BookingPage availableTimes={availableTimes} availableTimesDispatch={dispatch} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    );
}