

export default function BookingForm({times, handleChange, handleSubmit, formData}) {

  return (
    <div className="bg-slate-300 py-10 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="grid max-w-xl mx-auto gap-4 p-4 bg-white shadow-xl rounded">
        <h1 className="text-4xl font-markazi uppercase text-yellow-500 text-shadow font-bold mb-6">Book your table</h1>
        <label htmlFor="res-date" className="text-xl font-bold">Choose date *</label>
        <input
          type="date"
          id="res-date"
          className="py-5 border-4 p-4 rounded invalid:border-red-500"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="res-time" className="text-xl font-bold">Choose time *</label>
        <select
          id="res-time"
          className="py-5 border p-4 rounded invalid:border-red-500"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select a time</option>
          {times}
        </select>
        <label htmlFor="guests" className="text-xl font-bold">Number of guests *</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          className="border-4 p-4 rounded peer"
          value={formData.guests}
          name="guests"
          onChange={handleChange}
          required
        />
        <span className="text-md text-red-500 hidden peer-invalid:block">The number of guests should 1-10</span>
        <label htmlFor="occasion" className="text-xl font-bold">Occasion *</label>
        <select
          id="occasion"
          className="py-5 border p-4 rounded invalid:border-red-500"
          value={formData.occasion}
          name="occasion"
          onChange={handleChange}
          required
        >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
            <option value="Other">Other</option>
        </select>
        <button className="btn rounded mt-6 text-xl">Make a reservation</button>
      </form>
    </div>
  )
}