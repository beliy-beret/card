import { Button } from '../../../common/ui/button'

import css from './checkEmail.module.scss'

import { Envelop } from 'common/assets/icons/Envelop'
import { Typography } from 'common/ui/typography'

export const CheckEmail = () => {
  return (
    <section className={css.box}>
      <Typography variant="Large" as="h2" className={css.title}>
        Check Email
      </Typography>
      <Envelop />
      <Typography variant="Body_2" className={css.description}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button className={css.goBack} fullWidth>
        Back to Sign In
      </Button>
    </section>
  )
}
