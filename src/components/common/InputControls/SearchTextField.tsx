import { Search } from "@mui/icons-material"
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from "@mui/material"
import { SearchTextFieldProps } from "src/types/ComponentProps"

const SearchTextField = ({ onChange, title, placeHolder }: SearchTextFieldProps) => {
    return (
        <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-password">{title}</InputLabel>
            <Input
                type={'text'}
                onChange={onChange}
                placeholder={placeHolder ?? '请输入'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton>
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

export default SearchTextField;
