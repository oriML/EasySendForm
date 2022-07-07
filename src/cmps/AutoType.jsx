import React, { useEffect, useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const AutoType = () => {

    const [ autoValue, setAutoValue ] = useState("")
    useEffect(()=> console.log(autoValue), [autoValue])
    return (
    <FormGroup>
    <FormControlLabel 
    control={<Checkbox onClick={ () => setAutoValue(p => p !== "payment" ? "payment" : "" )} />}
    label="Payment withdrawal"
    />
    {
    autoValue === "payment" && 
    <div style={ { marginLeft: 20 } }>
        <FormControlLabel 
        label="Eligble for Tax Refund"
        control={<Checkbox />}
        />
        <FormControlLabel
        label="Not Eligble for Tax Refund"
        control={<Checkbox />}
        />
    </div> }

    <FormControlLabel 
    control={<Checkbox onClick={ () => setAutoValue(p => p !== "loan" ? "loan" : "" ) } />}
    
    label="Corresponding to a loan"
    // checked={autoValue === "loan"}
    />
  </FormGroup>
    )
    
}
export default AutoType