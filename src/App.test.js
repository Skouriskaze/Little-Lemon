import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import TableReservations from './components/TableReservations';
import { MemoryRouter } from 'react-router-dom';
import Main from './components/Main';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Render TableReservations Heading', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"]
  render(<TableReservations availableTimes={availableTimes} />);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});

test('Initial available times correct', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"]
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
  const updatedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"]
  render(
    <MemoryRouter initialEntries={['/reservations']}>
      <Main />
    </MemoryRouter>
  );

  // Change date and update times.
  const selector = screen.getByLabelText('Choose date');
  fireEvent.change(selector, {target: {value: "7-22-2024"}});

  // Test new times are available.
  for (const time of updatedTimes) {
    const labelElement = screen.getByRole("option", {name: time});
    expect(labelElement).toBeInTheDocument();
  }
});