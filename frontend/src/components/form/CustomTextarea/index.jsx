import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

const CustomTextarea = ({ name, label, control, errors, placeholder }) => {
  return (
    <Controller
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => (
        <TextField
          multiline
          placeholder={placeholder ?? null}
          minRows={4}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          inputRef={ref}
          fullWidth
          autoComplete={name}
          type="textarea"
          label={label}
          error={Boolean(errors[name] && errors?.[name])}
          helperText={
            errors[name]?.message && errors[name].message
          }
        />
      )}
      name={name}
      control={control}
    />
  )
}

export default CustomTextarea
