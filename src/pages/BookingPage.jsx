import { useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import { timeReducer, INITIAL_STATE, submitAPI } from "./TimeReducer";
import { formReducer, INITIAL_STATE as F_INITIAL_STATE } from "./FormReducer";

import ConfirmedBooking from "./ConfirmedBooking";

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [FState, Fdispatch] = useReducer(formReducer, F_INITIAL_STATE);
  const [state, dispatch] = useReducer(timeReducer, INITIAL_STATE(new Date()));


  function handleChange(e) {
    const { value, name, type} = e.target;
    Fdispatch({ type: "UPDATE_FORM", payload: { name, value } });

    if (type === "date") {
      dispatch({ type: "NEW_DATE", payload: value });
    } else {
      return state
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const success = await submitAPI(FState)
    setIsSubmitted(success)
  }

  const times = state.map((time, id) => (
    <option key={id} value={time}>
    {time}
    </option>
  ))

  return (
    <>
    {!isSubmitted ? <BookingForm
      formData={FState}
      times={times}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    /> : <ConfirmedBooking name={FState.name || "Customer"}/>}
    </>
  );
}