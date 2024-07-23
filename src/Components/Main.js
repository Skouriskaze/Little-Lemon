import { Route, Routes, useNavigate } from "react-router-dom";
import TableReservations from "./TableReservations";
import HomePage from "./HomePage";
import OrderOnline from "./OrderOnline";
import { useReducer } from "react";
import {fetchAPI, submitAPI} from 'src/scripts/api.js'
import BookingConfirmation from "./BookingConfirmation";

const Main = () => {
    const reduceTimes = (state, {date}) => {
        const input_date = new Date(Date.parse(date));
        return fetchAPI(input_date);
    }
    const initializeTimes = () => {
        const input_date = new Date();
        return fetchAPI(input_date);
    }
    const [availableTimes, dispatchAvailableTimes] = useReducer(
        reduceTimes,
        initializeTimes());

    const navigate = useNavigate();
    const submitForm = (formdata) => {
        if (submitAPI(formdata)) {
            navigate('/booking-confirmation');
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reservations"
                    element={<TableReservations
                        availableTimes={availableTimes} 
                        updateTimes={dispatchAvailableTimes}
                        confirmForm={submitForm}
                    />}
                />
                <Route path="/orderonline" element={<OrderOnline />} />
                <Route path="/booking-confirmation"
                    element={<BookingConfirmation />}
                />
            </Routes>
        </main>
    )
}

export default Main;