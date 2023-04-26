import {Outlet} from "react-router-dom"

import Footer from "./Footer"
import Header from "./Header"

export default function Layout() {
  return (
    <div className="grid grid-flow-row font-karla min-h-screen">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}