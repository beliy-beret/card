import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'

import css from './restorePassword.module.scss'
import { formSchema, type FormValues } from './validation'

import { Button } from 'common/ui/button'
import { Input } from 'common/ui/input'
import { Typography } from 'common/ui/typography'

type Props = {
  onSubmit: (data: FormValues) => void
}

export const RestorePassword: FC<Props> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(formSchema),
  })

  const submit = (data: FormValues) => onSubmit(data)

  return (
    <form className={css.form} onSubmit={handleSubmit(submit)}>
      <DevTool control={control} />
      <Typography variant="Large" as="h2" className={css.title}>
        Forgot your password?
      </Typography>

      <div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              className={css.textField}
              {...field}
              label={'Email'}
              errorMessage={errors.email?.message}
              fullWidth
            />
          )}
        />
        <Typography variant="Body_2" className={css.description}>
          Enter your email address and we will send you further instructions
        </Typography>
      </div>
      <div className={css.btnBlock}>
        <Button variant="primary" type="submit" fullWidth>
          Send Instructions
        </Button>
        <Typography className={css.description}>Did you remember your password?</Typography>
        <a className={css.signUpLink} href="/">
          Try logging in
        </a>
      </div>
    </form>
  )
}
