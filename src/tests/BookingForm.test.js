import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../Components/BookingForm";
import { fetchAPI } from "../utils/API";

jest.mock('../utils/API', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn(),
}));

test("Renders the BookingForm heading", () => {
    const mockData = {
        date: "",
        time: "",
        guests: 0,
        occasion: ""
    };
    const mockHandleChange = jest.fn();
    const mockHandleSubmit = jest.fn();
    const mockAvailableTimes = ["13:00", "14:00"];

    render(<BookingForm data={mockData} handleChange={mockHandleChange} handleSubmit={mockHandleSubmit} availableTimes={mockAvailableTimes} />);

    const dateElement = screen.getByText("Choose date");
    expect(dateElement).toBeInTheDocument();
});

test("initializeTimes works as expected", () => {
    fetchAPI.mockReturnValue(["13:00", "14:00"]);

    const mockData = {
        date: "",
        time: "",
        guests: 0,
        occasion: ""
    };
    const mockHandleChange = jest.fn();
    const mockHandleSubmit = jest.fn();
    const mockAvailableTimes = ["13:00", "14:00"];

    render(<BookingForm data={mockData} handleChange={mockHandleChange} handleSubmit={mockHandleSubmit} availableTimes={mockAvailableTimes} />);

    expect(screen.getByText('13:00')).toBeInTheDocument();
    expect(screen.getByText('14:00')).toBeInTheDocument();
});

test("User can submit the form", async () => {
    fetchAPI.mockReturnValue(['13:00', '14:00']);

    const mockData = {
        date: "",
        time: "",
        guests: 0,
        occasion: ""
    };
    const mockHandleChange = jest.fn();
    const mockHandleSubmit = jest.fn();
    const mockAvailableTimes = ["13:00", "14:00"];

    render(<BookingForm data={mockData} handleChange={mockHandleChange} handleSubmit={mockHandleSubmit} availableTimes={mockAvailableTimes} />);

    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");
    const submitButton = screen.getByText("Make Your reservation");

    fireEvent.change(dateInput, { target: { value: '2025-04-05' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'birthday' } });

    fireEvent.submit(submitButton);

    await waitFor(() => expect(window.location.pathname).toBe("/"));
});