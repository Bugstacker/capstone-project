import {Link} from "react-router-dom"


export default function CallToAction() {
  return (
    <div className="bg-green-700 text-white mb-44">
      <section className="flex py-12 gap-9 max-w-6xl mx-auto sm:px-2">
      <article className="flex flex-col">
        <h1 className="text-yellow-400 text-6xl font-bold font-markazi mb-5">Little Lemon</h1>
        <h3 className="font-markazi text-4xl mb-4">Chicago</h3>
        <p className="mb-10">
          It is also important to note that attempting to track someone's email address without their consent or legal authority may be a violation of privacy laws. It is always best to seek legal advice and follow established procedures when conducting any type of investigative activity..
        </p>
        <Link to="/booking" className="btn w-fit">Book a Table</Link>
      </article>
      <img src="/restaurantfood.jpg" alt="Chef with a dish of food from little lemon restaurant" className="w-96 -mb-44 rounded-2xl shadow-2xl"/>
    </section>
    </div>
  )
}