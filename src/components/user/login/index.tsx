// ** React Imports
// ** MUI Components

import { Link, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MuiCard, { CardProps } from '@mui/material/Card'
import Checkbox from '@mui/material/Checkbox'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { ChangeEvent, MouseEvent } from 'react'
import { useNavigate } from 'react-router'
import { useStore } from 'reto'
import { login } from 'src/service/medic'
import { SnackBarStore } from 'src/states/global/TopSnackBarStore'
import { LoginPageStore } from 'src/states/page/user/login'
import PasswordInput from '../../common/PasswordInput'



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

const LoginPageWrapper = () => {
    const states = useStore(LoginPageStore)
    const topSnackBarStates = useStore(SnackBarStore)

    const navigator = useNavigate()

    const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        states.setUserName(event.target.value)
    }

    const handlePassWordChange = (event: ChangeEvent<HTMLInputElement>) => {
        states.setPassWord(event.target.value)
    }

    const handleClickShowPassword = () => {
        states.setShowPassword(!states.showPassword)
    }

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    const handleClickLogin = () => {
        login(states.userName, states.passWord).then((res) => {
            if (res && res.code == 200) {
                topSnackBarStates.setSnackBarMessage('登录成功')
                topSnackBarStates.setSnackBarOpen(true)
                topSnackBarStates.setSnackBarType('success')
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('isAdmin', res.data.isAdmin.toString())
                console.log("更新管理员状态", localStorage.getItem('isAdmin'))
                localStorage.setItem('userName', states.userName)
                navigator('/filemanage', { replace: true })
            } else {
                topSnackBarStates.setSnackBarMessage(`登录失败,${res.message}`)
                topSnackBarStates.setSnackBarOpen(true)
                topSnackBarStates.setSnackBarType('error')
            }
        }).catch((err) => {
            topSnackBarStates.setSnackBarMessage(`登录失败,${err}`)
            topSnackBarStates.setSnackBarOpen(true)
            topSnackBarStates.setSnackBarType('error')
        })
    }
    const navi = useNavigate()
    return (
        <Stack className='content-center'>
            <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography
                    variant='h6'
                    sx={{
                        lineHeight: 1,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        fontSize: '1.5rem !important',
                        userSelect: 'none'
                    }}
                >
                    医疗数据共享系统
                </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
                <TextField autoFocus onChange={handleUserNameChange} fullWidth id='email' label='账号' sx={{ marginBottom: 4 }} >{states.userName}</TextField>
                <PasswordInput
                    password={states.passWord}
                    title={'密码'}
                    showPassword={states.showPassword}
                    onChange={(password) => states.setPassWord(password)}
                    onShowPasswordChange={() => states.setShowPassword((showPassword) => !showPassword)}
                />
                <Box
                    sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
                >
                    <FormControlLabel control={<Checkbox />} label='记住我' />
                    <Link
                        onClick={() => {navi('/user/register') }}
                        sx={{ userSelect: 'none' }}
                    >
                        注册
                    </Link>
                </Box>
                <Button
                    fullWidth
                    size='large'
                    variant='contained'
                    sx={{ marginBottom: 7 }}
                    onClick={handleClickLogin}
                >
                    登录
                </Button>
            </form>
        </Stack>
    )
}

export default LoginPageWrapper
