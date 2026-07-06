// src/components/LoginForm.test.tsx
import { describe, it, expect } from 'vitest';
import { logRoles, render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm · queries', () => {
  it('debería encontrar campos por su label (getByLabelText)', () => {
    // Arrange
    render(<LoginForm onLogin={() => {}} />);
    // Assert: la forma preferida para campos de formulario
    expect(screen.getByLabelText('Usuario')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
  });


  it('inspecciona el DOM y los roles', () => {
  const { container } = render(<LoginForm onLogin={() => {}} />);

  // Imprime TODO el HTML renderizado en consola
  screen.debug();

  // Imprime solo un nodo (más enfocado)
  screen.debug(screen.getByRole('button', { name: 'Entrar' }));

  // Lista todos los roles y sus nombres accesibles
  logRoles(container);
});

});