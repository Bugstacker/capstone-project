import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import Layout from "./components/Layout"
import BookingPage from "./pages/BookingPage"
import Homepage from "./pages/Homepage"
import ConfirmedBooking from "./pages/ConfirmedBooking"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Homepage />} />
    <Route 
      path="booking" 
      element={<BookingPage/>} 
    />
    <Route 
      path="confirmed"
      element={<ConfirmedBooking />}
    />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

