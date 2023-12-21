import { useEffect } from "react"
import { useNavigate } from "react-router"
import FileItem from "../../common/FileItem"
import VerticalList from "../../common/VerticalList"
import { useStore } from 'reto';
import { SharedByMeStore } from "src/states/page/file-share/sharedbyme"
import FileState from "src/components/common/FileState"
import { BottomDrawerStore } from '../../../states/global/BottomDrawerStore';
import ShredByMeFileOperationMenu from "./ShredByMeFileOperationMenu"
import { Box, Fade } from "@mui/material"
import { SharedFileToFileItemData, deleteSharingFile, myShareFile } from "src/service/medic"
import { toLocalTimeString } from "src/utils/time"
import { sizeToString } from "src/utils/sizeToString"
import { SnackBarStore } from "src/states/global/TopSnackBarStore";
import Toast from "src/components/common/Toast";

const SharedByMeWrapper = () => {
  const navi = useNavigate()
  const states = useStore(SharedByMeStore)
  const topSnackBarStates = useStore(SnackBarStore)
  const bottomeDrawerStates = useStore(BottomDrawerStore)
  useEffect(() => {
    myShareFile().then(res => {
      if (res && res.code === 200) {
        if (Array.isArray(res.data)) {
          states.setFiles(res.data.map((item, idx) => {
            return {
                id: item.id,
                fileName: item.fileName,
                fileSize: item.fileSize,
                state: 'fromShared',
                target: item.target,
                use: item.use,
                useLimit: item.useLimit,
                expire: item.expire,
                isAllow:item.isAllow
            }}))
          states.setLoading(false)
        } else {
          states.setFiles([res.data])
        }    
      }
    })
  }, [])

  const handleFileOperation = (ty: any, index: number) => {
    switch (ty) {
      case 'delete':
        bottomeDrawerStates.setBottomDrawerOpen(false)
        deleteSharingFile(states.files[index].id).then((res) => {
          if (res && res.code == 200) {
              topSnackBarStates.setSnackBarMessage('病历共享记录删除成功')
              topSnackBarStates.setSnackBarOpen(true)
              topSnackBarStates.setSnackBarType('success')
          } else {
              topSnackBarStates.setSnackBarMessage(`删除失败,${res.message}`)
              topSnackBarStates.setSnackBarOpen(true)
              topSnackBarStates.setSnackBarType('warning')
          }
        }).catch((err) => {
          topSnackBarStates.setSnackBarMessage(`删除失败,${err}`)
          topSnackBarStates.setSnackBarOpen(true)
          topSnackBarStates.setSnackBarType('error')
        })
      // 删除成功之后马上回到原来的地方，重新加载一次
      navi('/fileshare')
      break;
      case 'share':
        bottomeDrawerStates.setBottomDrawerOpen(false)
        if(states.files[index].isAllow != 1){
          Toast.warning("当前病历并未分配共享权限，请联系共享来源用户")
          break;
        }
        navi('/policymanage/create', { state: states.files[index]})//传入Id值
        break;
      case 'open':
        bottomeDrawerStates.setBottomDrawerOpen(false)
        navi('/pdfpreview', { state: SharedFileToFileItemData(index, states.files[index]) })//传入Id值
        break;
      case 'detail':
        bottomeDrawerStates.setBottomDrawerOpen(false)
        navi('/fileshare/details', {state:states.files[index]})
        break;
    }
  }
  const onOperationClicked = (index: number) => {
    bottomeDrawerStates.setBottomDrawerOpen(true)
    bottomeDrawerStates.setBottomDrawerContent(
      <ShredByMeFileOperationMenu fileName={states.files[index].fileName} onOperationClicked={(ty) => handleFileOperation(ty, index)} />
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
            sharedContent={<FileState state={'shared'} />}
            onOperationClicked={() => onOperationClicked(index)} />
        })} onItemClicked={onOperationClicked} />
      </Box>
    </Fade>
  )
}
export default SharedByMeWrapper
