// ** React Imports
// ** MUI Components

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useLocation } from 'react-router'
import { Stack, Container } from '@mui/material';
import CustomizedAccordions from 'src/components/common/Accordion'


const SharingDetailsWrapper = () => {
    const location = useLocation()
    const file = location.state as {expire : number, fileName : string, from : string,owner:string, target : string, use:number, useLimit:number}
    // 如果当前用户不是病历拥有者（即病历是被共享的）
    if(file.owner != localStorage.getItem('userName')){
        file.target = localStorage.getItem('userName')
    }
    if(file.from != localStorage.getItem('userName') && file.from != undefined){
        file.owner = file.from
        file.target = localStorage.getItem('userName')
    }
    return (
        <Stack className='content-center'>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography
                    variant='h4'
                    sx={{
                        lineHeight: 2,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        fontSize: '1.5rem !important'
                    }}
                >
                    {file.fileName}  共享详情   
                </Typography>
            </Box>
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <CustomizedAccordions props={file}></CustomizedAccordions>
                </Stack>
            </Container>
        </Stack>
    )
}

export default SharingDetailsWrapper
