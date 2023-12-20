import { Person } from "@material-ui/icons"
import GroupItem from "../common/GroupItem"
import VerticalList from "../common/VerticalList"
import { useNavigate } from 'react-router';
import { Box, Fade } from "@mui/material";
import { useEffect} from "react";
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
    let n1 ,n2;
    useEffect(() => {
        // 调用接口，获取列表数量
        n1 = 0;
        n2 = 0;
        const getList = async () => {
            myShareFile().then(res => {
            if (res && res.code === 200) {
                n1 = res.data.length
                options[0].description = res.data.length.toString() + '项'
            }
            })
            myBeShareFile().then(res=>{
            if (res && res.code === 200) {
                n2 = res.data.length
                options[1].description = res.data.length.toString() + '项'
                }
            })
        }
        getList()
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
            <VerticalList items={options.map((item, index) => {
                return <GroupItem key={index}
                    groupName={item.name} 
                    description={item.description} 
                    icon={item.icon} 
                    onClick={() => handleFileGroupClicked(index)} 
                    />
            })} />
        </Box>
    </Fade>
}
export default FileShareWrapper

function Totast(arg0: string) {
    throw new Error("Function not implemented.");
}

