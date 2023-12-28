import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/vue'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

import userEvent from '@testing-library/user-event'
import SignInForm from '@/components/auth/SignInForm.vue'

vi.mock('useAuth', () => {
  return {
    signIn: vi.fn(() => Promise.resolve({ error: true })),
  }
})

describe('SignInForm', () => {
  test('renders the component and form fields', async () => {
    render(SignInForm)

    expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument()
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument()
  })

  test('initializes with empty email and password fields', async () => {
    render(SignInForm)

    const emailInput = screen.getByLabelText('Correo electrónico') as HTMLInputElement
    const passwordInput = screen.getByLabelText('Contraseña') as HTMLInputElement

    expect(emailInput.value).toBe('')
    expect(passwordInput.value).toBe('')
  })

  test('submits the form with valid data', async () => {
    render(SignInForm)

    const credentials = { email: 'test@test.com', password: '123456' }

    const emailInput = screen.getByLabelText('Correo electrónico') as HTMLInputElement
    const passwordInput = screen.getByLabelText('Contraseña') as HTMLInputElement

    userEvent.type(emailInput, credentials.email)
    userEvent.type(passwordInput, credentials.password)
  })

  it('displays error message on form submission with invalid data', async () => {
    render(SignInForm)

    userEvent.click(screen.getByRole('button', { name: 'Iniciar sesión' }))

    // expect(screen.getByText('Oops, parece que algo no está bien.')).toBeInTheDocument()
  })
})
