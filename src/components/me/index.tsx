import { DeleteOutline, SettingsOutlined } from "@material-ui/icons"
import { LogoutOutlined } from "@mui/icons-material"
import { Fade, Stack } from "@mui/material"
import OperationItem from "../common/OperationItem"
import PublishIcon from '@material-ui/icons/Publish';
import { useNavigate } from "react-router";
import Toast from "../common/Toast";
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
                    console.log(localStorage.getItem("isAdmin"))
                    if(localStorage.getItem("isAdmin") != "0"){
                        navi("/file/upload")
                    }else{
                        Toast.warning("只有管理员才能上传文件!")
                    }
                }}/>
                <OperationItem icon={<LogoutOutlined />} name={"注销"} />

            </Stack>
        </Fade>
    )
}
export default MePageWrapper    
