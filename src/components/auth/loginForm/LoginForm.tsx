import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'

import css from './loginForm.module.scss'

import { loginSchema, type FormValues } from 'components/auth/loginForm/validation'
import { Button } from 'components/ui/button'
import { CheckBox } from 'components/ui/checkBox'
import { Input } from 'components/ui/input'

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: 'email',
      password: 'password',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {}

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <div style={{ marginBottom: errors.email ? '16px' : '' }}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input {...field} label={'email'} errorMessage={errors.email?.message} />
          )}
        />
      </div>
      <div style={{ marginBottom: errors.password ? '20px' : '' }}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="password"
              errorMessage={errors.password?.message}
            />
          )}
        />
      </div>
      <div className={css.rememberMe}>
        <Controller
          name="rememberMe"
          control={control}
          render={({ field }) => (
            <CheckBox checked={field.value!} onCheckedChange={field.onChange} label="remember Me" />
          )}
        />
      </div>
      <div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}
