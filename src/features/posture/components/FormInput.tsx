import { forwardRef} from "react";
import {
   TextField, 
} from "@mui/material";

const FormInput = forwardRef<HTMLInputElement,{ label: string }>(function FormInput({label}, ref) {
    return (
        <>
            <TextField 
                id="standard-basic" 
                label={label} 
                variant="outlined" 
                //https://mui.com/material-ui/api/text-field/
                //The inputRef prop is specifically designed for passing a ref to the input element within the TextField
                inputRef={ref}
            />
        </>
    )
})

export default FormInput