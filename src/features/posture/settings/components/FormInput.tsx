import { forwardRef} from "react";
import { TextField } from "@mui/material";

const FormInput = forwardRef<HTMLInputElement,{ message: string }>(function FormInput({message}, ref) {
    return (
        <>
            <TextField 
                id="standard-basic" 
                label={message} 
                variant="outlined" 
                ref={ref}
            />
        </>
    )
})

export default FormInput