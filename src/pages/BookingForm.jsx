export default function BookingForm({formData, times, handleChange, handleSubmit}) {


  return (
    <div className="bg-slate-400">
      <form 
        className="grid max-w-lg gap-2 p-4 mx-auto"
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date" className="text-xl font-bold">Choose date</label>
        <input
          type="date"
          id="res-date"
          className="py-5 border p-2 rounded"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="res-time" className="text-xl font-bold">Choose time</label>
        <select
          id="res-time"
          className="py-5 border p-2 rounded"
          name="time"
          value={formData.time}
          onChange={handleChange}
        >
          <option value="">Select a time</option>
          {times}
        </select>
        <label htmlFor="guests" className="text-xl font-bold">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          className="border p-2 rounded"
          value={formData.guests}
          name="guests"
          onChange={handleChange}
        />
        <label htmlFor="occasion" className="text-xl font-bold">Occasion</label>
        <select
          id="occasion"
          className="py-5 border p-2 rounded"
          value={formData.occasion}
          name="occasion"
          onChange={handleChange}
        >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
        </select>
        <button className="btn rounded">Make a  reservation</button>
      </form>
    </div>
  )
}