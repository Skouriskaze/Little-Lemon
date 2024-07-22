import { Route, Routes } from "react-router-dom";
import TableReservations from "./TableReservations";
import HomePage from "./HomePage";
import OrderOnline from "./OrderOnline";
import { useReducer } from "react";

const Main = () => {
    const reduceTimes = (state, action) => {
        return state;
    }
    const initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00"];
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