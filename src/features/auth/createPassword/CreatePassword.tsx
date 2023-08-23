import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'

import css from './createPassword.module.scss'
import { formSchema, type FormValues } from './validation'

import { Button } from 'common/ui/button'
import { Input } from 'common/ui/input'
import { Typography } from 'common/ui/typography'

type Props = {
  onSubmit: (data: FormValues) => void
}

export const CreatePassword: FC<Props> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(formSchema),
  })

  const submit = (data: FormValues) => onSubmit(data)

  return (
    <form className={css.form} onSubmit={handleSubmit(submit)}>
      <DevTool control={control} />
      <Typography variant="Large" as="h2" className={css.title}>
        Create new password
      </Typography>

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            className={css.textField}
            {...field}
            label={'Password'}
            type="password"
            errorMessage={errors.password?.message}
            fullWidth
          />
        )}
      />

      <Typography variant="Body_2" className={css.description}>
        Create new password and we will send you further instructions to email
      </Typography>

      <Button variant="primary" type="submit" fullWidth>
        Send Instructions
      </Button>
    </form>
  )
}
