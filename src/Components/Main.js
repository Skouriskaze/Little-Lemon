import { Route, Routes } from "react-router-dom";
import TableReservations from "./TableReservations";
import HomePage from "./HomePage";
import OrderOnline from "./OrderOnline";
import { useReducer } from "react";
import {fetchAPI} from 'src/scripts/api.js'

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

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reservations"
                    element={<TableReservations
                        availableTimes={availableTimes} 
                        updateTimes={dispatchAvailableTimes}/>}
                />
                <Route path="/orderonline" element={<OrderOnline />} />
            </Routes>
        </main>
    )
}

export default Main;