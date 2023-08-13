import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
//import { Link } from 'react-router-dom'

import css from './signIn.module.scss'
import { loginSchema, type FormValues } from './validation'

import { Button } from 'common/ui/button'
import { CheckBox } from 'common/ui/checkBox'
import { Input } from 'common/ui/input'
import { Typography } from 'common/ui/typography'

type Props = {
  onSubmit: (data: FormValues) => void
}

export const SignIn: FC<Props> = ({ onSubmit }) => {
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

  const submit = (data: FormValues) => onSubmit(data)

  return (
    <form className={css.form} onSubmit={handleSubmit(submit)}>
      <DevTool control={control} />
      <Typography variant="Large" as="h2" className={css.title}>
        Sign In
      </Typography>
      <div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input {...field} label={'Email'} errorMessage={errors.email?.message} fullWidth />
          )}
        />
      </div>
      <div>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="Password"
              errorMessage={errors.password?.message}
              fullWidth
            />
          )}
        />
      </div>
      <div className={css.rememberMe}>
        <Controller
          name="rememberMe"
          control={control}
          render={({ field }) => (
            <CheckBox checked={field.value!} onCheckedChange={field.onChange} label="Remember me" />
          )}
        />
        <a className={css.restorePasswordLink} href={'/'}>
          Forgot Password?
        </a>
      </div>
      <div className={css.btnBlock}>
        <Button variant="primary" type="submit" fullWidth>
          Sign In
        </Button>
        <Typography className={css.title}>Don&apos;t have an account?</Typography>
        <a className={css.signUpLink} href="/">
          Sign Up
        </a>
      </div>
    </form>
  )
}
