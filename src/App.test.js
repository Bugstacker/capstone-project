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

describe('BookingForm', () => {
  it('should have required validation HTML tags', () => {
    const { getByRole } = render(<BookingForm />);

    const nameInput = getByRole('textbox', { name: /name \*/i });
    expect(nameInput).toHaveAttribute('required');
    expect(nameInput).toHaveAttribute('minlength', '3');
    expect(nameInput).toHaveAttribute('maxlength', '30');
    expect(nameInput).toHaveAttribute('pattern', '[A-Za-z ]+');

    const emailInput = getByRole('textbox', { name: /email \*/i });
    expect(emailInput).toHaveAttribute('required');
    expect(emailInput).toHaveAttribute('type', 'email');

    const dateInput = getByRole('textbox', { name: /choose date \*/i });
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('type', 'date');

    const timeSelect = getByRole('combobox', { name: /choose time \*/i });
    expect(timeSelect).toHaveAttribute('required');

    const guestsInput = getByRole('spinbutton', { name: /number of guests \*/i });
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');

    const occasionSelect = getByRole('combobox', { name: /occasion \*/i });
    expect(occasionSelect).toHaveAttribute('required');
  });
});

