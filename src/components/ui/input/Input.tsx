import { FC, ComponentProps, useState, ChangeEvent } from 'react'

import css from './input.module.scss'

import { CloseOpticIcon } from 'assets/icons/CloseOpticIcon'
import { DeleteIcon } from 'assets/icons/DeleteIcon'
import { OpticIcon } from 'assets/icons/OpticIcon'
import { SearchIcon } from 'assets/icons/SearchIcon'

//type DefaultProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type Props = ComponentProps<'input'> & {
  label?: string
  error?: boolean
  errorMessage?: string
  onChangeValue?: (value: string) => void
  clearHandler?: () => void
}

export const Input: FC<Props> = ({
  onChangeValue,
  label,
  className,
  error,
  errorMessage,
  onChange,
  type,
  clearHandler,
  value,
  ...rest
}) => {
  // const [inputValue, setInputValue] = useState(() => (value ? value : ''))

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  }

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
        {type === 'search' && clearHandler && (
          <DeleteIcon fill="#fff" className={css.delete} onClick={clearHandler} />
        )}

        {label && <span>{label}</span>}
        <input type={inputType} className={inputStyle} onChange={onChangeCallback} {...rest} />
        {errorMessage && <span className={css.message}>{errorMessage}</span>}
      </label>
    </>
  )
}
