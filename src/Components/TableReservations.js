import { useState } from 'react';
import '../styles/reservations.css'

const TableReservations = ({availableTimes, updateTimes}) => {
    const [date, setDate] = useState("");
    const onDateChange = (event) => {
        setDate(event.target.value);
        updateTimes();
    };

    const [time, setTime] = useState("");
    const onTimeChange = (event) => setTime(event.target.value);

    const [numGuests, setNumGuests] = useState(1);
    const onGuestChange = (event) => setNumGuests(event.target.value);

    const [occasion, setOccasion] = useState("Birthday");
    const onOccasionChange = (event) => setOccasion(event.target.value);

    return (
        <div className="form-container primary-section-odd">
            <h1>
                Book a Table
            </h1>
            <form className='table-form'>
                <div>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" onChange={onDateChange} />
                </div>
                <div>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" onChange={onTimeChange}>
                        {availableTimes.map((time) => (
                            <option key={time}>{time}</option>)
                        )}
                    </select>
                </div>
                <div>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number"
                        placeholder="1" min="1" max="10"
                        id="guests" onChange={onGuestChange} />
                </div>
                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" onChange={onOccasionChange}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
    )
}

export default TableReservations;