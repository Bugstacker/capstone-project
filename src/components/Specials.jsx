import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


const specials = [
  {
    id: 1,
    name: "Greek Salad",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our chicago style fetta, cheese, garnished with our chicago garlic and rosemary cruotons.",
    price: 12.99,
    img: "./greekSalad.jpg"
  },
  {
    id: 2,
    name: "Bruchetta",
    description: "Our bruchetta is made from grilled bread that has been smeared with garlic, season with salth and olive oil.",
    price: 5.99,
    img: "./bruchetta.svg"
  },
  {
    id: 3,
    name: "Lemon dessert",
    description: "This comes straight from grandma’s recipe book every last ingredient has been sourced and authentic as you can imagine",
    price: "5.00",
    img: "./lemonDessert.jpg"
  }
]

export default function Specials() {

  const specialsList = specials.map(special => {
    return (
      <article key={special.id} className="w-64 bg-slate-200 rounded-xl hover:shadow-xl transition">
        <img src={special.img} alt={`${special.name}`}  className="w-64 rounded-t-2xl"/>
        <div className="flex items-center justify-between p-2">
          <h3 className="text-2xl font-bold">{special.name}</h3>
          <p className="text-orange-400 font-bold">${special.price}</p>
        </div>
        <p className="p-2">{special.description}</p>
        <Link to="/">
        <div className="flex items-center justify-between p-2 mb-4 font-bold text-yellow-600">
          <p>Order a delivery</p>
          <FontAwesomeIcon icon={faHome} />
        </div>
        </Link>
      </article>
    )
  })

  return (
    <section className="mb-24 max-w-6xl mx-auto sm:px-2">
      <div className="flex justify-between mb-16">
        <h2 className="text-4xl font-bold">Specials</h2>
        <Link to="/" className="btn">Online menu</Link>
      </div>
      <div className="flex gap-4 justify-between grow flex-wrap">
        {specialsList}
      </div>
    </section>
  )
}