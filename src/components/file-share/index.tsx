import { Person } from "@material-ui/icons"
import GroupItem from "../common/GroupItem"
import VerticalList from "../common/VerticalList"
import { useNavigate } from 'react-router';
import { Box, Fade } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { getFileList, myShareFile } from "src/service/medic";

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
    useEffect(() => {
        // 调用接口，获取列表数量
        myShareFile().then(res => {
          if (res && res.code === 0) {
            options[0].description = res.data.length.toString()
          }
        }),
        getFileList().then(res=>{
            if(res && res.code === 0){
                options[1].description = res.data.length.toString()
            }
        })
        console.log('options', options)
      })
    // 获取文件数量
    const handleFileGroupClicked = (index: number) => {
        switch (index) {
            case 0:
                navi('/fileshare/sharedbyme')
                break
            case 1:
                navi('/fileshare/sharedtome')
                break
            default:
                break;
        }
    }

    return <Fade in={true}>
        <Box>
            <VerticalList items={options.map((item, index) => {
                return <GroupItem key={index} groupName={item.name} description={item.description} icon={item.icon} onClick={() => handleFileGroupClicked(index)} />
            })} />
        </Box>
    </Fade>
}
export default FileShareWrapper
