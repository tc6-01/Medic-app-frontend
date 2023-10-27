import { DateTimePicker } from '@mui/lab'
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Switch,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'
import {
  DateInputProps,
  DateRangeInputProps,
  SelectInputProps,
  SwitchInputProps,
  TextInputProps
} from 'src/types/ComponentProps'
import SearchTextField from './SearchTextField'
import Checkbox from '@mui/material/Checkbox';
const TextInput = ({ id, name, defaultValue, placeHolder, onChange }: TextInputProps) => {
  return (
    <TextField
      id={id}
      fullWidth
      label={name}
      placeholder={placeHolder}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  )
}

const SelectInput = ({ id, name, options, defaultValue, placeHolder, onChange }: SelectInputProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id='form-layouts-separator-select-label'>{name}</InputLabel>
      <Select
        id={id}
        label={name}
        defaultValue={defaultValue}
        placeholder={placeHolder}
        labelId='form-layouts-separator-select-label'
        onChange={onChange}
      >
        {options.map((option, index) => {
          return (
            <MenuItem value={option.id} key={index}>
              {option.name}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12
    }
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2
  }
}))

const SwitchInput = ({ id, name, onChange, checked }: SwitchInputProps) => {
  return (
    <FormControlLabel
      id={id}
      control={<Checkbox defaultChecked />}
      label={name}
      labelPlacement='start'
      checked={checked}
      onChange={onChange}
    />
  )
}

const DateInput = ({ defaultValue, onChange, title }: DateInputProps) => {
  return (
    <Box>
      <DateTimePicker
        label={title}
        value={defaultValue}
        onChange={(e, v) => onChange && onChange(e, v)}
        renderInput={params => <TextField fullWidth {...params} />}
      />
    </Box>
  )
}

const DateRangeInput = ({ defaultValue, onFromChange, onToChange, fromTitle, toTitle }: DateRangeInputProps) => {
  const [from, setFrom] = useState(defaultValue ? defaultValue[0] : undefined)
  const [to, setTo] = useState(defaultValue ? defaultValue[0] : undefined)
  return (
    <Box display='flex' justifyContent='stretch' alignContent={'center'}>
      <DateTimePicker
        label={fromTitle}
        value={from}
        onChange={(e, v) => {
          setFrom(e)
          onFromChange && onFromChange(e, v)
        }}
        renderInput={params => <TextField fullWidth {...params} />}
      />
      <Typography
        minWidth={50}
        display={'flex'}
        justifyContent='center'
        alignItems='center'
        variant='h6'
        ml={10}
        mr={10}
      >
        至
      </Typography>
      <DateTimePicker
        label={toTitle}
        value={to}
        onChange={(e, v) => {
          setTo(e)
          onToChange && onToChange(e, v)
        }}
        renderInput={params => <TextField fullWidth {...params} />}
      />
    </Box>
  )
}

export { TextInput, SelectInput, SwitchInput, DateInput, DateRangeInput, SearchTextField }
