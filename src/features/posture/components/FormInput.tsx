import { forwardRef} from "react";
import { TextField } from "@mui/material";

const FormInput = forwardRef<HTMLInputElement,{ label: string }>(function FormInput({label}, ref) {
    return (
        <>
            <TextField 
                id="standard-basic" 
                label={label} 
                variant="outlined" 
                inputRef={ref}
            />
        </>
    )
})

export default FormInput