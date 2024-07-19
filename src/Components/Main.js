import { Route, Routes } from "react-router-dom";
import TableReservations from "./TableReservations";
import HomePage from "./HomePage";
import OrderOnline from "./OrderOnline";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/reservations" element={<TableReservations />}/>
                <Route path="/orderonline" element={<OrderOnline />}/>
            </Routes>
        </main>
    )
}

export default Main;