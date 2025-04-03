export default function BookingForm({data, handleChange, handleSubmit, availableTimes}) {
    return (
        <form style={{"display": "grid", "maxWidth": "200px", "gap": "20px"}} onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" min={new Date().toISOString().split("T")[0]} id="res-date" name="date" onChange={handleChange} value={data.date} required />
            </div>
            <div className="input-group">
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name='time' onChange={handleChange} value={data.time} required>
                    <option value="">Select Time</option>
                    {availableTimes.map(time => {
                        return (
                            <option key={time} value={time}>{ time }</option>
                        );
                    })}
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" onChange={handleChange} value={data.guests} />
            </div>
            <div className="input-group">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" onChange={handleChange} value={data.occasion} required>
                    <option value="">Select Occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
};