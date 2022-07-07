import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from './cmps/Input';
import RadioButton from './cmps/RadioButton';
import Buttons from './cmps/Buttons';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from './cmps/FormLabel';
import { formTypeValues, employeeTypes,withdrawalTypes } from './constants/formValues'
import { useForm } from 'react-hook-form'

const Form = () => {

  const { register, handleSubmit, formState: { errors}} = useForm();

  const onSubmit = data => console.log(data)

  const digitsValidate = (digits) => digits.some(a => a>=0 && a<=9 )

//  const [ formValues, setFormValues ] = useState({
//    firstName: '',
//    lastName: '',
//    socialSecurityNumber:'',
//    mobilePhoneNumber: '',
//    email: '',

//  })
//  const handleChange = (e) => {
//    const name = e.target.name;
//    const value = e.target.value;
// console.log(name, value)
//    setFormValues( p => {
//      return {
//        ...p,
//        [name]: value
//      }
//    })

//  }
 const [ withdrawalType, setWithdrawalType ] = useState('full');
  
// useEffect(()=>console.log(formValues), [formValues])

  return (
    <form
      style={{
        margin: 'auto',
        marginTop: 25,
        marginBottom: 15,
        width: '25vw',
        textAlign: 'left'
      }}
      onSubmit={handleSubmit(onSubmit)}
    
    >

      <TextField
      variant="standard"
      label="First Name" 
      sx={{width: "50%"}}
      name="firstName"
      {...register('firstName', { pattern: /^[a-zA-Z\s]*$/ })}
      error={errors.firstName ? true : false}

      />
      {errors.FirstName && <p>Field Must contain only english letters and spaces.</p>}
      
      <TextField
      variant="standard"
      label="Last Name"
      name="lastName"
      sx={{width: "50%"}}
      // onChange={handleChange}
      {...register('lastName', { pattern: /^[a-zA-Z\s]*$/ })}
      error={errors.lastName ? true : false}
      />

      {errors.lastName && <span>Field Must contain only english letters and spaces.</span>}

      <Input 
      label="Social Security Number"

      />

      <Input label="Mobile Phone Number" />

      <Input label="Email" />

      <FormControl sx={{textAlign: 'left', mt: 5}}>
      <FormLabel text="Type of form to send:" />
      <RadioGroup defaultValue="withdrawal" name="radio-buttons-group" >
        {
          formTypeValues.map( ({value, label}) => <RadioButton key={value} value={value} label={label} /> )
        }
      </RadioGroup>
    </FormControl>


      <TextField 
      variant="standard"
      label="Fund Name"
      name="fundName"
        sx={{width: "100%"}}
      {...register('fundName', { pattern: /^(?:[A-Za-z]+)(?:[A-Za-z0-9 _]*)$/ })}
      error={errors.fundName ? true : false}
      
      />
      {errors.fundName && <span>Field Must contain only english letters, numbers or spaces.</span>}

      <TextField
      label="Account Number"
      name="accountNumber"
      variant="standard"
      style={{width:"100%"}}
      {...register('accountNumber', { pattern: /^[0-9]*$/ })}
      error={errors.accountNumber ? true : false}
      />
      {errors.accountNumber && <span>Field Must contain only digits</span>}
  
      <TextField
      label="Fund Number"
      name="fundName"
      variant="standard"
      style={{width:"100%"}}
      {...register('fundNumber', { pattern: /^[0-9]*$/ })}
      error={errors.fundNumber ? true : false}
      />
      {errors.fundNumber && <span>Field Must contain only digits</span>}

      <FormControl sx={{textAlign: 'left', mt: 5}}>
      <FormLabel text="Employee Type:" />
      <RadioGroup defaultValue="withdrawal" name="radio-buttons-group" >
        {
          employeeTypes.map( ({value, label}) => <RadioButton key={value} value={value} label={label} /> )
        }
      </RadioGroup>
    </FormControl>

    <FormControl sx={{textAlign: 'left', mt: 5}}>
      <FormLabel text="Withdrawal Type:" />
      <RadioGroup defaultValue="withdrawal" name="radio-buttons-group" >
        {
          withdrawalTypes.map( ({value, label, children}) => 
          <RadioButton key={value} 
          label={label} 
          value={value} 
          onClick={() => setWithdrawalType(value)}
          children={children}
          withdrawalType={withdrawalType}

          />
          )
        }
      
      </RadioGroup>
    </FormControl>


        <Buttons />

    </form>
  )
}
// INPUTS
//first name
//last name
// social security number
// mobile phone number
// email

// RADIO 
// type of for to send:
// found withdrawal request
// found transfer cancel request
// Life insurance onboarding form

// BUTTONS
// clear form
// send form

export default Form