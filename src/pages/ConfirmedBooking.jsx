import { Link } from "react-router-dom"

export default function ConfirmedBooking() {
  return (
    <section className="flex flex-col justify-between gap-4 p-4">
      <h1 className="text-4xl font-markazi uppercase text-yellow-500 text-shadow font-bold mb-6">Booking confirmed</h1>
      <p className="text-xl">Thank you for booking with us. We look forward to seeing you soon.</p>
      <Link to={"/"} className="btn place-self-start">Back to Homepage</Link>
    </section>
  )
}