import { FileManagePageStore } from 'src/states/page/file-manage'
import { Box, Button, Grid, Stack } from '@mui/material'
import { useStore } from 'reto'
import { TextInput } from 'src/components/common/InputControls'
// import { createData } from 'src/service/Data';
import { CreateProps } from 'src/types/ComponentProps'

import { downloadFile } from 'src/service/dataApi'
import { useState } from 'react'

// getAllData回调函数 添加数据后会更新数据
const DownloadDataTabs = ({ getAll }: CreateProps) => {
  // const [url, setUrl] = useState<string>('')
  // const [dataId, setDataId] = useState<string>('')
  // const [md5, setMD5] = useState<string>('')
  // const dialogStates = useStore(DataManagePageStore)

  // //取消弹框
  // const handleCancel = () => {
  //   dialogStates.setDownloadDialogOpen(false)
  // }

  // //创建数据通道请求
  // const onDownload = () => {
  //   downloadFile(url, dataId, md5)
  // }

  // return (
  //   <Grid sx={{ height: '100%', pt: 3 }}>
  //     <Stack spacing={4}>
  //       <TextInput
  //         name={'设备地址'}
  //         placeHolder={'请输入设备地址'}
  //         onChange={e => {
  //           setUrl(e.target.value)
  //         }}
  //       />
  //       <TextInput
  //         name={'数据ID'}
  //         placeHolder={'请输入数据ID'}
  //         onChange={e => {
  //           setDataId(e.target.value)
  //         }}
  //       />
  //       <TextInput
  //         name={'数据md5'}
  //         placeHolder={'请输入数据md5'}
  //         onChange={e => {
  //           setMD5(e.target.value)
  //         }}
  //       />
  //       <Grid item display={'flex'} flexDirection={'row'} justifyContent={'space-around'} spacing={5}>
  //         <Button fullWidth variant='contained' onClick={onDownload} >
  //           开始下载
  //         </Button>
  //         <Button fullWidth variant='contained' color='error' onClick={handleCancel}>
  //           取消下载
  //         </Button>
  //       </Grid>
  //     </Stack>
  //   </Grid>
  //)
  return <></>
}

export { DownloadDataTabs }
