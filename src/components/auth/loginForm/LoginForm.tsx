import { useForm, Controller } from 'react-hook-form'

import css from './loginForm.module.scss'

import { Button } from 'components/ui/button'
import { Input } from 'components/ui/input'
type FormValues = {
  email: string
  password: string
}

export const LoginForm = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      email: 'email',
      password: 'password',
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => <Input {...field} label={'email'} />}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => <Input {...field} type="password" label="password" />}
      />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  )
}
