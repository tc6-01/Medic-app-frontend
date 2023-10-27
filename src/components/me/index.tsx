import { DeleteOutline, SettingsOutlined } from "@material-ui/icons"
import { GarageOutlined, LogoutOutlined, Settings } from "@mui/icons-material"
import { Container, Fade, Stack, Typography } from "@mui/material"
import OperationItem from "../common/OperationItem"
import Paper from '@mui/material/Paper';

const MePageWrapper = () => {

    return (
        <Fade in={true}>
            <Stack spacing={1} mt={2}>
                <Typography variant="h5">abc@163.com</Typography>
                <OperationItem icon={<SettingsOutlined />} name={"设置"} />
                <OperationItem icon={<DeleteOutline />} name={"回收站"} />
                <OperationItem icon={<LogoutOutlined />} name={"注销"} />
            </Stack>
        </Fade>
    )
}
export default MePageWrapper
