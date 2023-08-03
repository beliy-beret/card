import { FC, InputHTMLAttributes, DetailedHTMLProps, useState, ChangeEvent } from 'react'

import css from './input.module.scss'

import { CloseOpticIcon } from 'assets/icons/CloseOpticIcon'
import { DeleteIcon } from 'assets/icons/DeleteIcon'
import { OpticIcon } from 'assets/icons/OpticIcon'
import { SearchIcon } from 'assets/icons/SearchIcon'

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
  const opticIcon = open ? (
    <CloseOpticIcon fill="#fff" className={css.optic} onClick={openHandler} />
  ) : (
    <OpticIcon fill="#fff" className={css.optic} onClick={openHandler} />
  )

  return (
    <>
      <label className={componentStyle}>
        {type === 'password' && opticIcon}
        {type === 'search' && <SearchIcon fill="#fff" className={css.search} />}
        {type === 'search' && inputValue && (
          <DeleteIcon fill="#fff" className={css.delete} onClick={cleanInputValue} />
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
