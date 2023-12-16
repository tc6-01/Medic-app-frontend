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
import { uploadFile } from 'src/service/medic'

const FileUploadWrapper = () => {
    const states = useStore(UploadPageStore)
    const topSnackBarStates = useStore(SnackBarStore)
    const navigator = useNavigate()

    const handleUpload = () => {
      // state.file中存放的文件需要进行上传，写出一个文件上传的表单，并确保后端可以接收到这个文件
      var form = new FormData();
      form.append("files", states.file)
      form.append("fileSize", states.file.size.toString())
      form.append("fileName", states.file.name)
      form.append("owner",states.owner)
        // 提交表单，上传文件
        uploadFile(form).then((res)=>{
          console.log(res)  
          if (res && res.code == "200") {
                    topSnackBarStates.setSnackBarMessage('文件上传成功')
                    topSnackBarStates.setSnackBarOpen(true)
                    topSnackBarStates.setSnackBarType('success')
                    navigator('/me', { replace: true })
                } else {
                    topSnackBarStates.setSnackBarMessage(`文件上传失败, ${res.msg}`)
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
                    <TextField autoFocus
                        onChange={(event) => states.setOwner(event.target.value)}
                        fullWidth
                        id='owner' label='用户名'
                    >
                        {states.owner}
                    </TextField>
                    <TextField autoFocus
                        fullWidth
                        id='files' label='上传病例'
                        InputProps={{type:'file',
                        onChange:(event:React.ChangeEvent<HTMLInputElement>) => {
                          if (event.target.files[0].size > 10 * 1024 * 1024) { // 10MB
                            alert('文件大小不能超过10MB');
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
