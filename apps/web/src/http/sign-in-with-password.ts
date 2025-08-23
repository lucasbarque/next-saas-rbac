import type { Sign } from 'crypto'
import { api } from './api-client'

interface SignWithEmailAndPasswordRequest {
  email: string
  password: string
}

interface SignWithEmailAndPasswordResponse {
  token: string
}

export async function signInWithPassword({ email, password }: SignWithEmailAndPasswordRequest) {
  const result = await api
    .post('sessions/password', {
      json: {
        email,
        password,
      },
    })
    .json<SignWithEmailAndPasswordResponse>()

  return result
}
