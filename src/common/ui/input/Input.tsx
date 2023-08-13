import { FC, ComponentProps, useState, ChangeEvent } from 'react'

import css from './input.module.scss'

import { CloseOpticIcon } from 'common/assets/icons/CloseOpticIcon'
import { DeleteIcon } from 'common/assets/icons/DeleteIcon'
import { OpticIcon } from 'common/assets/icons/OpticIcon'
import { SearchIcon } from 'common/assets/icons/SearchIcon'

type Props = ComponentProps<'input'> & {
  label?: string
  error?: boolean
  errorMessage?: string
  onChangeValue?: (value: string) => void
  onClear?: () => void
}

export const Input: FC<Props> = ({
  onChangeValue,
  label,
  className,
  error,
  errorMessage,
  onChange,
  type,
  onClear,
  value,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(() => (value ? value : ''))

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
    setInputValue(e.currentTarget.value)
  }

  const clearInput = () => {
    onClear?.()
    setInputValue('')
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
        {type === 'search' && inputValue && (
          <DeleteIcon fill="#fff" className={css.delete} onClick={clearInput} />
        )}

        {label && <span>{label}</span>}
        <input
          type={inputType}
          className={inputStyle}
          value={inputValue}
          onChange={onChangeCallback}
          {...rest}
        />
        {errorMessage && <span className={css.message}>{errorMessage}</span>}
      </label>
    </>
  )
}
