import logo from "../assets/logo.svg"
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <div className="flex flex-wrap max-w-6xl justify-between py-4 mx-auto w-full sm:px-2">
      <header>
        <img src={logo} alt="little lemon logo" className="-mt-1.5" />
      </header>
      <nav className="basis-3/4">
        <ul>
          <li className="flex justify-between font-semibold text-lg">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Menu</Link>
            <Link to="/booking">Reservations</Link>
            <Link to="/">Order Online</Link>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}