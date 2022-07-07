import * as React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';


const RadioButton = ({value, label, onClick,withdrawalType, children}) => {

 return ( <>
    <FormControlLabel
    onClick={onClick}
    value={value}
    control={<Radio />}
    label={label} 
    />
    {withdrawalType === value && children}
</>
)
}

export default RadioButton
