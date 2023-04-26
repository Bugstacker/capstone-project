import "./BookingForm.css"

export default function BookingForm({times, handleChange, handleSubmit, formData}) {

  return (
    <div className="bg-slate-300 py-10 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="grid max-w-xl mx-auto gap-4 p-4 bg-white shadow-xl rounded">
        <h1 className="text-4xl font-markazi uppercase text-yellow-500 text-shadow font-bold mb-6">Book your table</h1>
        <label htmlFor="name" className="text-xl font-bold flex flex-col">Name *</label>
        <input
          type="text"
          id="name"
          className="py-5 border-4 p-4 rounded name invalid:border-red-300"
          name="name"
          value={formData.name}
          onChange={handleChange}
          minLength={3}
          maxLength={30}
          pattern="[A-Za-z ]+"
          required
        />
        <span className="text-red-300 text-sm font-bold">Enter a valid name 3-30 characters</span>
        <label htmlFor="name" className="text-xl font-bold flex flex-col">Email *</label>
        <input
          type="email"
          id="email"
          className="py-5 border-4 p-4 rounded invalid:border-red-300 email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <span className="text-red-300 text-sm font-bold">Enter a valid Email Address</span>
        <label htmlFor="res-date" className="text-xl font-bold">Choose date *</label>
        <input
          type="date"
          id="res-date"
          className="py-5 border-4 p-4 rounded invalid:border-red-300"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="res-time" className="text-xl font-bold">Choose time *</label>
        <select
          id="res-time"
          className="py-5 border-4 p-4 rounded invalid:border-red-300"
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
        <span className="text-sm text-red-300 font-bold hidden peer-invalid:block">The number of guests should 1-10</span>
        <label htmlFor="occasion" className="text-xl font-bold">Occasion *</label>
        <select
          id="occasion"
          className="py-5 border-4 p-4 rounded invalid:border-red-300"
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