import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'

import css from './signUp.module.scss'
import { formSchema, type FormValues } from './validation'

import { Button } from 'common/ui/button'
import { Input } from 'common/ui/input'

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

      <div style={{ marginBottom: errors.password ? '16px' : '' }}>
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
      <div style={{ marginBottom: errors.confirm ? '16px' : '' }}>
        <Controller
          name="confirm"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="confirm password"
              errorMessage={errors.confirm?.message}
            />
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
