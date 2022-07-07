import React from 'react'
import Input from './Input'
import { useForm } from 'react-hook-form'
import { TextField } from '@mui/material';

const PartialType = () => {
    const { register, handleSubmit, formState: { errors}} = useForm();

return <>
        <TextField
        label="Withdrawal Amount"
        variant="standard"
        sx={{width: "50%"}}
        name="withdrawlAmount"
        {...register('withdrawlAmount', { max: 99000 })}
        error={errors.withdrawlAmount ? true : false}

        />
        { errors.withdrawlAmount && <span>Amount must be under 99000</span>}
        </>
} ;

export default PartialType