import { Grid, Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  ControlInputProps, PolicyEditorProps,
  SelectInputProps,
  TextInputProps, TimeInputProps
} from 'src/types/ComponentProps';
import { SelectInput, SwitchInput, TextInput } from '../common/InputControls';
import ItemSwitch from '../common/ItemSwitch/ItemSwitch';


const PolicyEditor = ({ items }: PolicyEditorProps) => {
  return <Stack spacing={3}>
    {items?.map((item, index) => {
      switch (item.type) {
        case 'text': {
          const value = item.value as TextInputProps
          return (
            <Grid item key={index} display={item.display ? 'block' : 'none'}>
              <TextInput
                id={value.id}
                key={index}
                name={value.name}
                defaultValue={value.defaultValue}
                placeHolder={value.placeHolder}
                onChange={value.onChange}
              />
            </Grid>
          )
        }

        case 'select': {
          const value = item.value as SelectInputProps
          return (
            <Grid item key={index} display={item.display ? 'block' : 'none'}>
              <SelectInput
                id={value.id}
                key={index}
                name={value.name}
                options={value.options}
                defaultValue={value.defaultValue}
                placeHolder={value.placeHolder}
                onChange={value.onChange}
              />
            </Grid>
          )
        }
        // 单选框
        // case 'switch': {
        //   const value = item.value as SwitchInputProps
        //   return (
        //     <Grid item key={index} display={item.display ? 'block' : 'none'}>
        //       <SwitchInput
        //         id={value.id}
        //         key={index}
        //         name={value.name}
        //         enabled={value.enabled}
        //         checked={value.checked}
        //         onChange={value.onChange}
        //       />
        //     </Grid>
        //   )
        // }
        case 'title': {
          return (
            <Stack key={index}>
              <Typography
                variant="h4" color="textPrimary"
              >
                {'添加规则'}
              </Typography>
            </Stack>
          )
        }
        case 'control': {
          const values = item.value as ControlInputProps

          return <ItemSwitch items={values.items} />
        }
        case 'time': {
          const value = item.value as TimeInputProps
          return (
            <Stack direction={'column'} key={index} display={item.display ? 'flex' : 'none'}>
              {/* <Box>{value.title}</Box> */}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  // id={value.id}
                  label={value.title}
                  value={value.value}
                  onChange={value.onChange}
                  renderInput={(params: any) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Stack>
          )
        }
        default:
          return <></>
      }
    })}
  </Stack>
}

export default PolicyEditor
