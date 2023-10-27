import { Grid } from '@mui/material'

import { ControlInputProps } from 'src/types/ComponentProps'
import { SwitchInput } from '../InputControls'

const ItemSwitch = ({ items }: ControlInputProps) => {
  return (
    <Grid container direction='row'>
      {items.map((item, index) => {
        return (
          <Grid item xs={6}>
            <SwitchInput
              id={item.id}
              key={index}
              name={item.name}
              enabled={item.enabled}
              checked={item.checked}
              onChange={item.onChange}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}
export default ItemSwitch
