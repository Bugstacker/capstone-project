import { Link } from "react-router-dom"

export default function ConfirmedBooking({name}) {
  return (
    <section className="flex flex-col justify-center gap-4 p-4 h-2/3 items-center">
      <h1 className="text-4xl font-markazi uppercase text-yellow-500 text-shadow font-bold mb-6">Booking confirmed</h1>
      <p className="text-xl">Thank you {name} booking with us. We look forward to seeing you soon.</p>
      <Link to={"/"} className="btn">Back to Homepage</Link>
    </section>
  )
}