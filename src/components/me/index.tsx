import { DeleteOutline, SettingsOutlined } from "@material-ui/icons"
import { GarageOutlined, LogoutOutlined, Settings } from "@mui/icons-material"
import { Container, Fade, Icon, Stack, Typography } from "@mui/material"
import OperationItem from "../common/OperationItem"
import PublishIcon from '@material-ui/icons/Publish';
import { useNavigate } from "react-router";
import { DropzoneAreaBase } from "material-ui-dropzone";
const fileWrapper = () =>{
    return 
}


const MePageWrapper = () => {
    const navi = useNavigate()
    return (
        <Fade in={true}>
            <Stack spacing={1} mt={2}>
                <OperationItem icon={<SettingsOutlined />} name={"设置"} />
                <OperationItem icon={<DeleteOutline />} name={"回收站"} />
                <OperationItem icon={<PublishIcon/>} name={"上传文件"} onclick={()=>{
                    /**跳转进行上传文件 */
                    navi("/file/upload")
                }}/>
                <OperationItem icon={<LogoutOutlined />} name={"注销"} />

            </Stack>
        </Fade>
    )
}
export default MePageWrapper    
