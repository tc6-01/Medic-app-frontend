import { InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import { EyeOutline, EyeOffOutline } from "mdi-material-ui"
import { MouseEvent } from "react"
import { PasswordInputProps } from "src/types/ComponentProps"

const PasswordInput = ({ password, showPassword, title, onChange, onShowPasswordChange }: PasswordInputProps) => {

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    return (
        <FormControl fullWidth>
            <InputLabel htmlFor='auth-login-password'>{title}</InputLabel>
            <OutlinedInput
                label='Password'
                value={password}
                id='auth-login-password'
                onChange={(event) => onChange?.(event.target.value)}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position='end'>
                        <IconButton
                            edge='end'
                            onClick={onShowPasswordChange}
                            onMouseDown={handleMouseDownPassword}
                            aria-label='toggle password visibility'
                        >
                            {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

export default PasswordInput
