import { FC, InputHTMLAttributes, DetailedHTMLProps, useState, ChangeEvent } from 'react'

import css from './input.module.scss'

//import closeOpticIcon from 'assets/icons/close_optic.svg'
import { CloseOptic } from 'assets/icons/CloseOptic'
import deleteIcon from 'assets/icons/delete.svg'
import opticIcon from 'assets/icons/optic.svg'
import searchIcon from 'assets/icons/search.svg'

type DefaultProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type Props = DefaultProps & {
  label?: string
  error?: boolean
  errorMessage?: string
}

export const Input: FC<Props> = ({
  label,
  className,
  error,
  errorMessage,
  value,
  onChange,
  type,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(() => (value ? value : ''))
  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
    setInputValue(e.currentTarget.value)
  }

  const cleanInputValue = () => setInputValue('')

  const [inputType, setInputType] = useState<string>(type || 'text')
  const [open, setOpen] = useState(false)
  const openHandler = () => {
    if (open) {
      setInputType('password')
      setOpen(false)
    } else {
      setInputType('text')
      setOpen(true)
    }
  }

  const componentStyle = `${className} ${css.label}`
  const inputStyle = error || errorMessage ? css.error : ''

  return (
    <>
      <label className={componentStyle}>
        {type === 'password' && <CloseOptic fill="#fff" />}
        {type === 'search' && <img src={searchIcon} className={css.search} />}
        {type === 'search' && inputValue && (
          <img src={deleteIcon} className={css.delete} onClick={cleanInputValue} />
        )}

        {label && <span>{label}</span>}
        <input
          type={inputType}
          value={inputValue}
          {...rest}
          className={inputStyle}
          onChange={inputValueHandler}
        />
        {errorMessage && <span className={css.message}>{errorMessage}</span>}
      </label>
    </>
  )
}
