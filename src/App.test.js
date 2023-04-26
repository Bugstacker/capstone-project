import { render, screen } from '@testing-library/react';
import { timeReducer } from './pages/TimeReducer';
import BookingForm from './pages/BookingForm';

describe('timeReducer', () => {
  it("returns initial state when given invalid action", () => {
    const initialState = []
    const action = { type: 'INVALID_ACTION' }
    const newState = timeReducer(initialState, action)
    expect(newState).toEqual(initialState)
  })

  it("return new state when given a 'SET_DATE' action, with a payload of the date", () => {
    const currentState = []
    const action = { type: 'SET_DATE', payload: '2021-01-01' }
    const newState = timeReducer(currentState, action)
    expect(newState).toEqual([/* expected Array of fetched data */])
  })
})

describe("Booking Form", () => {
  it("applies correct validation attributes to input elements", () => {
    render(<BookingForm />)
    const input = screen.getByLabelText("guests")
    expect(input).toHaveAttribute('required')
  })
})
