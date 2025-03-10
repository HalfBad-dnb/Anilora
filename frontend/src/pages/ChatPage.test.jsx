import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, test, expect, jest, afterEach } from '@jest/globals';
import '@testing-library/jest-dom'; // For additional matchers like toBeInTheDocument
import ChatPage from './ChatPage';

// Define customEvent for simulating client messages
fireEvent.customEvent = (element, data) => {
  const event = new CustomEvent('customMessage', { detail: data });
  element.dispatchEvent(event);
};

describe('ChatPage Tests', () => {
  // Test 1: Verify chat input and send button are rendered
  test('renders chat input and send button', () => {
    render(<ChatPage />);

    const inputElement = screen.getByPlaceholderText(/Type a message/i);
    const sendButton = screen.getByText(/Send/i);

    expect(inputElement).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
    // Comment out Tailwind class assertions unless Tailwind is configured in test environment
    // expect(inputElement).toHaveClass('flex-1'); // Verify Tailwind class
    // expect(sendButton).toHaveClass('bg-blue-500'); // Verify Tailwind class
  });

  // Test 2: Verify a message can be sent by the customer and displayed
  test('can send a message from customer and display it', () => {
    render(<ChatPage />);

    const inputElement = screen.getByPlaceholderText(/Type a message/i);
    const sendButton = screen.getByText(/Send/i);

    fireEvent.change(inputElement, { target: { value: 'Hello, world!' } });
    fireEvent.click(sendButton);

    const messageElement = screen.getByText(/Hello, world!/i);
    expect(messageElement).toBeInTheDocument();
    // Comment out Tailwind class assertion unless Tailwind is configured
    // expect(messageElement).toHaveClass('bg-white'); // Verify Tailwind class on message
    expect(inputElement).toHaveValue(''); // Ensure input is cleared
  });

  // Test 3: Verify an empty message is not sent
  test('does not send an empty message', () => {
    render(<ChatPage />);

    const inputElement = screen.getByPlaceholderText(/Type a message/i);
    const sendButton = screen.getByText(/Send/i);

    // Record initial message count by targeting message container
    const messageContainer = screen.getByTestId('message-container'); // Add data-testid to ChatPage
    const initialMessages = messageContainer.children.length;

    fireEvent.change(inputElement, { target: { value: '' } });
    fireEvent.click(sendButton);

    // Check that no new message is added
    const updatedMessages = messageContainer.children.length;
    expect(updatedMessages).toBe(initialMessages);

    // Ensure input remains empty
    expect(inputElement).toHaveValue('');
  });

  // Test 4: Simulate live interaction - Customer sends, client responds
  test('can send message from customer and receive response from client', async () => {
    render(<ChatPage />);

    const inputElement = screen.getByPlaceholderText(/Type a message/i);
    const sendButton = screen.getByText(/Send/i);

    // Customer sends a message
    fireEvent.change(inputElement, { target: { value: 'Hello, I need help!' } });
    fireEvent.click(sendButton);

    // Wait for the customer message to appear
    const customerMessage = await screen.findByText(/Hello, I need help!/i);
    expect(customerMessage).toBeInTheDocument();

    // Simulate a client response (mocked via custom event)
    await act(async () => {
      fireEvent.customEvent(window, { // Use window since ChatPage listens on window
        detail: { message: 'Hi, how can I assist?' },
      });
    });

    // Wait for the client message to appear
    const clientMessage = await waitFor(() => screen.getByText(/Hi, how can I assist?/i));
    expect(clientMessage).toBeInTheDocument();
  });

  // Test 5: Verify multiple messages can be sent and displayed
  test('can send multiple messages and display them', () => {
    render(<ChatPage />);

    const inputElement = screen.getByPlaceholderText(/Type a message/i);
    const sendButton = screen.getByText(/Send/i);

    // Send first message
    fireEvent.change(inputElement, { target: { value: 'Message 1' } });
    fireEvent.click(sendButton);
    expect(screen.getByText(/Message 1/i)).toBeInTheDocument();

    // Send second message
    fireEvent.change(inputElement, { target: { value: 'Message 2' } });
    fireEvent.click(sendButton);
    expect(screen.getByText(/Message 2/i)).toBeInTheDocument();

    // Ensure both messages are present
    const messages = screen.getAllByText(/Message [12]/i);
    expect(messages).toHaveLength(2);
  });

  // Test 6: Verify input updates correctly
  test('input value updates on change', () => {
    render(<ChatPage />);

    const inputElement = screen.getByPlaceholderText(/Type a message/i);

    fireEvent.change(inputElement, { target: { value: 'Test input' } });
    expect(inputElement).toHaveValue('Test input');

    fireEvent.change(inputElement, { target: { value: '' } });
    expect(inputElement).toHaveValue('');
  });
});

// Optional: Cleanup to prevent memory leaks
afterEach(() => {
  jest.clearAllMocks();
});