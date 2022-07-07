import React from 'react'
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form'

const Input = ({ label,name, width, onChange, pattern,  }) => {

  const { register, handleSubmit, formState: { errors}} = useForm();

  // const reg = register? register : null;

  return pattern?(
    <>
    <TextField
    id="standard-basic"
    name={name}
    label={label}
    variant="standard"
    onChange={onChange}
    sx={ {
      width:  width ? width : '100%',
    }}
    {...register(name, { pattern })}
    />
    
    { errors ? errors[name] && <span>Hello!</span> : null}

    </>
  )
  :(
    <TextField
    id="standard-basic"
    name={name}
    label={label}
    variant="standard"
    onChange={onChange}
    sx={ {
        width:  width ? width : '100%',
    }}
    />

  )
}

export default Input