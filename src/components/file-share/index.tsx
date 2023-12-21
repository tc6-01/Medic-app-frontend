import { Person } from "@material-ui/icons"
import GroupItem from "../common/GroupItem"
import VerticalList from "../common/VerticalList"
import { useNavigate } from 'react-router';
import { Box, Fade } from "@mui/material";
import { useEffect, useState} from "react";
import { myBeShareFile, myShareFile } from "src/service/medic";
const options = [
    {
        icon: <Person />,
        name: '由我共享',
        description: '0项',
    },
    {
        icon: <Person />,
        name: '共享给我',
        description: '0项',
    },
]

const FileShareWrapper = () => {
    const navi = useNavigate()
    const[n1, setn1] = useState(0)
    const[n2, setn2] = useState(0)
    useEffect(() => {
        const getList = async () => {
            myShareFile().then(res => {
                if (res && res.code === 200) {
                    setn1(res.data.length)
                }
            })
            myBeShareFile().then(res=>{
                if (res && res.code === 200) {
                    setn2(res.data.length)
                }
            })
        }
        getList()
        options[0].description = n1.toString() + '项'
        options[1].description = n2.toString() + '项'
    }, [])
    // 获取文件数量
    const handleFileGroupClicked = (index: number) => {
        switch (index) {
            case 0:
                if (n1 == 0){
                    break;
                }
                navi('/fileshare/sharedbyme')
                break
            case 1:
                if(n2 == 0){
                    break;
                }
                navi('/fileshare/sharedtome')
                break
            default:
                break;
        }
    }

    return <Fade in={true}>
        <Box>
            <VerticalList items={[
                <GroupItem key={0}
                groupName={options[0].name} 
                description={n1.toString()+'项'} 
                icon={options[0].icon} 
                onClick={()=>handleFileGroupClicked(0)} 
                />,
                <GroupItem key={1}
                    groupName={options[1].name} 
                    description={n2.toString()+'项'} 
                    icon={options[1].icon} 
                    onClick={()=>handleFileGroupClicked(1)} 
                    /> 
            ]}/>
        </Box>
    </Fade>
}
export default FileShareWrapper


