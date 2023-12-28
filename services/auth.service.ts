export function signUp(credentials: { email: string; password: string }) {
  return $fetch('/api/auth/sign-up', { method: 'POST', body: credentials })
}
