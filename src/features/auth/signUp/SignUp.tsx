import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'

import css from './signUp.module.scss'
import { formSchema, type FormValues } from './validation'

import { Button } from 'common/ui/button'
import { Input } from 'common/ui/input'
import { Typography } from 'common/ui/typography'

type Props = {
  onSubmit: (data: FormValues) => void
}

export const SignUp: FC<Props> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
      confirm: '',
    },
    resolver: zodResolver(formSchema),
  })

  const submit = (data: FormValues) => onSubmit(data)

  return (
    <form className={css.form} onSubmit={handleSubmit(submit)}>
      <DevTool control={control} />
      <Typography variant="Large" as="h2" className={css.title}>
        Sign Up
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
      <div>
        <Controller
          name="confirm"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="Confirm password"
              errorMessage={errors.confirm?.message}
              fullWidth
            />
          )}
        />
      </div>

      <div className={css.btnBlock}>
        <Button variant="primary" type="submit" fullWidth>
          Sign Up
        </Button>
        <Typography className={css.title}>Already have an account?</Typography>
        <a className={css.signUpLink} href="/">
          Sign In
        </a>
      </div>
    </form>
  )
}
