import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import { DetailContentProps } from 'src/types/ComponentProps'

const DetailContent = ({ title, items }: DetailContentProps) => {
  return (
    <Card sx={{ minWidth: 300, height: '100%' }}>
      <CardHeader
        title={
          <Typography sx={{ mt: 5 }} variant='h6' color='primary'>
            {title}
          </Typography>
        }
      />
      <CardContent>
        <Stack alignContent='center'>
          {items?.map(item => (
            <Typography variant='body1' sx={{ m: 3 }}>
              {'数据名称:' + `${item.dataName}`}
              <br />
              {'创建时间:' + `${item.createdTime}`}
            </Typography>
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}

export { DetailContent }
