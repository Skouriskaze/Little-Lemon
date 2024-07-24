import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import TableReservations from 'src/components//TableReservations';
import { MemoryRouter } from 'react-router-dom';
import Main from 'src/components/Main';
import { fetchAPI, submitAPI } from 'src/scripts/api.js'

jest.mock('src/scripts/api.js', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn()
}));

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('Render TableReservations Heading', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"]
  render(<TableReservations availableTimes={availableTimes} />);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});

test('Initial available times correct', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:30"];
  fetchAPI.mockImplementation(() => availableTimes);
  render(
    <MemoryRouter initialEntries={['/reservations']}>
      <Main />
    </MemoryRouter>
  );

  // Test initial times are correct.
  for (const time of availableTimes) {
    const labelElement = screen.getByRole("option", {name: time});
    expect(labelElement).toBeInTheDocument();
  }
});

test('Update times correct', () => {
  const intitialTimes = ["17:00", "18:00", "19:00", "20:00", "21:30"];
  fetchAPI.mockImplementation(() => intitialTimes);
  render(
    <MemoryRouter initialEntries={['/reservations']}>
      <Main />
    </MemoryRouter>
  );

  // Change date and update times.
  const updatedTimes = ["17:00", "18:00", "19:00", "20:30"];
  fetchAPI.mockImplementation(() => updatedTimes);
  const selector = screen.getByLabelText('Choose date');
  fireEvent.change(selector, {target: {value: "7-22-2024"}});

  // Test new times are available.
  for (const time of updatedTimes) {
    const labelElement = screen.getByRole("option", {name: time});
    expect(labelElement).toBeInTheDocument();
  }
});

test('Missing name invalid form', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:30"];
  fetchAPI.mockImplementation(() => availableTimes);
  render(
    <MemoryRouter initialEntries={['/reservations']}>
      <Main />
    </MemoryRouter>
  );

  const selector = screen.getByLabelText(/Name:/);
  fireEvent.change(selector, { target: { value: "" } });
  expect(selector).toBeInvalid();
});

test('Present name valid form', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:30"];
  fetchAPI.mockImplementation(() => availableTimes);
  render(
    <MemoryRouter initialEntries={['/reservations']}>
      <Main />
    </MemoryRouter>
  );

  const selector = screen.getByLabelText(/Name:/);
  fireEvent.change(selector, { target: { value: "First Last" } });
  expect(selector).toBeValid();
});

test('Single name invalid form', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:30"];
  fetchAPI.mockImplementation(() => availableTimes);
  render(
    <MemoryRouter initialEntries={['/reservations']}>
      <Main />
    </MemoryRouter>
  );

  const selector = screen.getByLabelText(/Name:/);
  fireEvent.change(selector, { target: { value: "Name" } });
  fireEvent.click(screen.getByText(/Make Your reservation/));
  const confirmation = screen.queryByText("Booking Confirmed");
  expect(confirmation).not.toBeInTheDocument();
});

test('Full name success', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:30"];
  fetchAPI.mockImplementation(() => availableTimes);
  submitAPI.mockImplementation(() => true);
  render(
    <MemoryRouter initialEntries={['/reservations']}>
      <Main />
    </MemoryRouter>
  );

  const nameSelect = screen.getByLabelText(/Name:/);
  fireEvent.change(nameSelect, { target: { value: "First Last" } });
  fireEvent.click(screen.getByText(/Make Your reservation/));

  expect(mockedUsedNavigate).toHaveBeenCalled();
});