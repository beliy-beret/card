import { z } from 'zod'

export const formSchema = z
  .object({
    email: z.string().email({
      message: 'Invalid email',
    }),
    password: z.string().min(3),
    confirm: z.string().min(3),
  })
  .refine(data => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  })

export type FormValues = z.infer<typeof formSchema>
