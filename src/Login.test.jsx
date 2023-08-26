
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
