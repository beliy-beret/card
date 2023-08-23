import { z } from 'zod'

export const formSchema = z.object({
  password: z.string().min(3),
})

export type FormValues = z.infer<typeof formSchema>
