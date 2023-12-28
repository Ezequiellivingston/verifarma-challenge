import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/auth/sign-in',
  },
  providers: [
    // @ts-ignore
    CredentialsProvider.default({
      name: 'Credentials',
      authorize(credentials: { email: string; password: string }) {
        const user = {
          username: process.env.AUTH_CREDENTIALS_EMAIL,
          password: process.env.AUTH_CREDENTIALS_PASSWORD,
        }

        if (credentials?.email === user.username && credentials?.password === user.password) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
})
