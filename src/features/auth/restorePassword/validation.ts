import { z } from 'zod'

export const formSchema = z.object({
  email: z.string().email({
    message: 'Invalid email',
  }),
})

export type FormValues = z.infer<typeof formSchema>
