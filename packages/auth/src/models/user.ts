import { z } from 'zod'
import { roleSchema, type Role } from '../roles'

export const userSchema = z.object({
  id: z.string(),
  role: roleSchema,
})

export type User = z.infer<typeof userSchema>
