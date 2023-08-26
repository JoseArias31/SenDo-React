
import { expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom';
import Login from './Components/login'

import { render, fireEvent } from '@testing-library/react';



test('HandleInputChangePassword updates state correctly', () => {
  const { getByPlaceholderText } = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  
  const passwordInput = getByPlaceholderText('password*');
  
  fireEvent.change(passwordInput, { target: { value: 'newPassword' } });

  expect(passwordInput.value).toBe('newPassword');
});



test('Show the text correctly.', () => {
  const { getByText } = render(
  
    <BrowserRouter>
    <Login />
  </BrowserRouter>
  
  )// Crea una función simulada para onClick
   const text = getByText('Sign in', {selector: 'h1'}); // Obtén el botón por su rol
    expect(text).toBeInTheDocument(); // Verifica si la función onClick se llamó
});



