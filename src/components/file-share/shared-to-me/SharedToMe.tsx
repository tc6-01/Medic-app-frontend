import { Box, Fade } from "@mui/material"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useStore } from 'reto'
import FileState from "src/components/common/FileState"
import { getPolicies } from "src/service/policyApi"
import { SharedToMeStore } from "src/states/page/file-share/sharedtome"
import { BottomDrawerStore } from '../../../states/global/BottomDrawerStore'
import FileItem from "../../common/FileItem"
import VerticalList from "../../common/VerticalList"
import SharedToMeFileOperationMenu from "./ShredToMeFileOperationMenu"
import { FileToFileItemData, getFileList, myBeShareFile } from "src/service/medic"
import { toLocalTimeString } from "src/utils/time"
import { sizeToString } from "src/utils/sizeToString"
import Toast from "src/components/common/Toast"

const SharedToMeWrapper = () => {
  const navi = useNavigate()
  const states = useStore(SharedToMeStore)
  const drawerStates = useStore(BottomDrawerStore)
  useEffect(() => {
    myBeShareFile().then(res => {
      if (res && res.code === 200) {
        if (Array.isArray(res.data)) {
          states.setFiles(res.data)
          states.setLoading(false)
        } else {
          states.setFiles([res.data])
        }
      }
    })
  }, [])

  // 处理菜单按钮
  const handleFileOperation = (ty: any, index: number) => {
    switch (ty) {
      case 'delete':
        console.log('delete files at index', index);
        break;
      case 'open':
        drawerStates.setBottomDrawerOpen(false)
        console.log(states.files)
        navi('/pdfpreview', { state: states.files[index] })//传入Id值
        break;
      case 'share':
        console.log('share files at index', index);
        drawerStates.setBottomDrawerOpen(false)
        if(states.files[index].isAllow != 1){
          Toast.warning("当前病历并未分配共享权限，请联系共享来源用户")
          break;
        }
        navi('/policymanage/create', { state: states.files[index] })//传入Id值
        break;
      case 'detail':
        drawerStates.setBottomDrawerOpen(false)
        navi('/fileshare/details', {state:states.files[index]})
        break;
    }
  }
  const onOperationClicked = (index: number) => {
    drawerStates.setBottomDrawerOpen(true)
    drawerStates.setBottomDrawerContent(
      <SharedToMeFileOperationMenu fileName={states.files[index].fileName} onOperationClicked={(ty) => handleFileOperation(ty, index)} />
    )
  }

  return (
    <Fade in={true}>
      <Box>
        <VerticalList items={states.files?.map((SharedItems, index) => {
          return <FileItem
            key={index}
            fileName={SharedItems.fileName}
            fileTime={toLocalTimeString(SharedItems.expire)}
            fileSize={sizeToString(SharedItems.fileSize)}
            remainUse={SharedItems.useLimit - SharedItems.use}
            sharedContent={<FileState state={'fromShared'} />}
            onOperationClicked={() => onOperationClicked(index)} />
        })} onItemClicked={onOperationClicked} />
      </Box>
    </Fade>
  )
}
export default SharedToMeWrapper
