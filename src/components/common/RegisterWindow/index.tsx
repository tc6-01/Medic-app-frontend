// ** React Imports
// ** MUI Components

import FooterIllustrationsV1 from 'src/components/user/login/FooterIllustration'
import { SnackBarStore } from 'src/states/global/TopSnackBarStore'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MuiCard, { CardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import { ChangeEvent, MouseEvent } from 'react'
import { useNavigate } from 'react-router'
import { useStore } from 'reto'
import { LoginPageStore } from 'src/states/page/user/login'
import { Stack, Container } from '@mui/material';
import PasswordInput from '../PasswordInput/index';
import { RegisterWindowStore } from '../../../states/page/user/register/index';
import { register } from 'src/service/medic'




// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
    [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
    fontSize: '0.875rem',
    textDecoration: 'none',
    color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
    '& .MuiFormControlLabel-label': {
        fontSize: '0.875rem',
        color: theme.palette.text.secondary
    }
}))

const RegisterWindow = () => {
    const states = useStore(RegisterWindowStore)
    const topSnackBarStates = useStore(SnackBarStore)
    const navigator = useNavigate()

    const handleClickRegister = () => {
        register(states.userName, states.passWord, states.repetePassword).then((res) => {
            if (res && res.code == "200") {
                topSnackBarStates.setSnackBarMessage('注册成功，请重新登录')
                topSnackBarStates.setSnackBarOpen(true)
                topSnackBarStates.setSnackBarType('success')
                navigator('/user/login', { replace: true })
            } else {
                topSnackBarStates.setSnackBarMessage(`注册失败,${res.message}`)
                topSnackBarStates.setSnackBarOpen(true)
                topSnackBarStates.setSnackBarType('error')
            }
        }).catch((err) => {
            topSnackBarStates.setSnackBarMessage(`注册失败,${err}`)
            topSnackBarStates.setSnackBarOpen(true)
            topSnackBarStates.setSnackBarType('error')
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
                    用户注册
                </Typography>
            </Box>
            <Container maxWidth="sm">
                <Stack spacing={2}>
                    <TextField autoFocus
                        onChange={(event) => states.setUserName(event.target.value)}
                        fullWidth
                        id='email' label='输入账号'
                    >
                        {states.userName}
                    </TextField>
                    <PasswordInput
                        password={states.passWord}
                        title={'输入密码'}
                        showPassword={states.showPassword}
                        onChange={(password) => states.setPassWord(password)}
                        onShowPasswordChange={() => states.setShowPassword((showPassword) => !showPassword)}
                    />
                    <PasswordInput
                        password={states.repetePassword}
                        title={'再次输入密码'}
                        showPassword={states.showPassword}
                        onChange={(password) => states.setRepetePassword(password)}
                        onShowPasswordChange={() => states.setShowPassword((showPassword) => !showPassword)}
                    />
                    <Button
                        fullWidth
                        size='large'
                        variant='contained'
                        sx={{ marginBottom: 7 }}
                        onClick={handleClickRegister}
                    >
                        确认注册
                    </Button>
                </Stack>
            </Container>
        </Stack>
    )
}

export default RegisterWindow
