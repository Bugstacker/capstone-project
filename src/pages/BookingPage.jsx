import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";
import { timeReducer, INITIAL_STATE, submitAPI } from "./TimeReducer";
import { formReducer, INITIAL_STATE as F_INITIAL_STATE } from "./FormReducer";

export default function BookingPage() {
  let navigate = useNavigate();
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
    console.log(FState)
    if (success) {
      navigate("/confirmed");
    }
  }

  const times = state.map((time, id) => (
    <option key={id} value={time}>
    {time}
    </option>
  ))

  return (
    <BookingForm
      formData={FState}
      times={times}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}