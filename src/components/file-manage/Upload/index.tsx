// ** React Imports
// ** MUI Components

import { SnackBarStore } from 'src/states/global/TopSnackBarStore'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router'
import { useStore } from 'reto'
import { Stack, Container, Input } from '@mui/material';
import { UploadPageStore } from '../../../states/page/upload-file/index';
import { getUserList, uploadFile } from 'src/service/medic'
import { useEffect, useState } from 'react'
import Toast from 'src/components/common/Toast'
import { RoleSelectData } from 'src/types/models/DataModels'
import { SelectInput } from 'src/components/common/InputControls'


const FileUploadWrapper = () => {
    const states = useStore(UploadPageStore)
    const topSnackBarStates = useStore(SnackBarStore)
    const navigator = useNavigate()
    const [roles, setRoles] = useState<Array<RoleSelectData>>([])
    useEffect(() => {
        getUserList().then(res => {
          if (res && res.code === 200) {
            if (Array.isArray(res.data)) {
                console.log(res.data.map((item,idx) => { return { id: idx.toString(), name: item } }))
              setRoles(res.data.map((item, idx) => { return { id: idx.toString(), name: item } }))
            }
          } else {
            Toast.error('获取用户列表失败')
          }
        })
      }, []) 
    const handleUpload = () => {
      // state.file中存放的文件需要进行上传，写出一个文件上传的表单，并确保后端可以接收到这个文件
      if(states.file == null || states.owner == null){
        Toast.warning("请选择病历拥有者或上传病历")
        return
      }
      var form = new FormData();
      form.append("files", states.file)
      form.append("fileSize", states.file.size.toString())
      form.append("fileName", states.file.name)
      form.append("owner",states.owner)
        // 提交表单，上传文件
        uploadFile(form).then((res)=>{
          console.log(res)  
          if (res && res.code == "200") {
                    topSnackBarStates.setSnackBarMessage('病历上传成功')
                    topSnackBarStates.setSnackBarOpen(true)
                    topSnackBarStates.setSnackBarType('success')
                    navigator('/me', { replace: true })
                } else {
                    topSnackBarStates.setSnackBarMessage(`病历上传失败, ${res.msg}`)
                    topSnackBarStates.setSnackBarOpen(true)
                    topSnackBarStates.setSnackBarType('info')
                }
            })
    }

    return (
        <Stack className='content-center'>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography
                    variant='h6'
                    sx={{
                        lineHeight: 1,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        fontSize: '1.5rem !important'
                    }}
                >
                    上传病例
                </Typography>
            </Box>
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <SelectInput
                        name={"用户名"}
                        options={roles}
                        placeHolder={"请选择目标用户"}
                        onChange={ (e: any) => {
                            states.setOwner(roles[e.target.value].name)
                          }}
                    />
       
                    <TextField autoFocus
                        fullWidth
                        id='files'
                        InputProps={{type:'file',
                        onChange:(event:React.ChangeEvent<HTMLInputElement>) => {
                          if (event.target.files[0].size > 1 * 1024 * 1024) { // 1MB
                            Toast.warning('文件大小不能超过10MB');
                            event.preventDefault();
                          } else {
                            states.setFile(event.target.files[0]);
                          }
                        }}}
                    />
                    <Button
                        fullWidth
                        size='large'
                        variant='contained'
                        sx={{ marginBottom: 7 }}
                        onClick={handleUpload}
                    >
                        确认上传
                    </Button>
                </Stack>
            </Container>
        </Stack>
    )
}

export default FileUploadWrapper
