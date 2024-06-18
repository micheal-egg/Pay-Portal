import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

function renderLogin() {
  return render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
}

describe('Login credentials', () => {
  it('shows an error when credentials are wrong', async () => {
    renderLogin();
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/work email/i), 'wrong@apple.com');
    await user.type(screen.getByLabelText(/password/i), 'wrongpass');
    await user.click(screen.getByRole('button', { name: /sign in/i }));

    expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument();
  });

  it('does not show an error when credentials are correct', async () => {
    renderLogin();
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/work email/i), 'micheal.egboh@apple.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /sign in/i }));

    expect(screen.queryByText(/invalid email or password/i)).not.toBeInTheDocument();
  });
});
