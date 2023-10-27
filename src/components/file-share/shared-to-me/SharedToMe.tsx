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
import { FileToFileItemData, getFileList } from "src/service/medic"
import { toLocalTimeString } from "src/utils/time"
import { sizeToString } from "src/utils/sizeToString"

const SharedToMeWrapper = () => {
  const navi = useNavigate()
  const states = useStore(SharedToMeStore)
  const drawerStates = useStore(BottomDrawerStore)
  useEffect(() => {
    getFileList().then(res => {
      if (res && res.code === 0) {
        if (Array.isArray(res.data)) {
          states.setFiles(res.data
            .map((item, idx) => {
              return FileToFileItemData(idx, item)
            }))
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
        console.log('delete files at index', index);
        break;
      case 'open':
        drawerStates.setBottomDrawerOpen(false)
        console.log(states.files)
        navi('/pdfpreview', { state: states.files[index] })//传入Id值
        break;
        break;
      case 'share':
        console.log('share files at index', index);
        break;
      case 'detail':
        console.log('detail files at index', index);
        break;
    }
  }
  const onOperationClicked = (index: number) => {
    drawerStates.setBottomDrawerOpen(true)
    drawerStates.setBottomDrawerContent(
      <SharedToMeFileOperationMenu fileName={states.files[index].name} onOperationClicked={(ty) => handleFileOperation(ty, index)} />
    )
  }

  return (
    <Fade in={true}>
      <Box>
        <VerticalList items={states.files?.map((SharedItems, index) => {
          console.log(SharedItems)
          return <FileItem
            key={index}
            fileName={SharedItems.name}
            fileTime={toLocalTimeString(SharedItems.expire)}
            fileSize={sizeToString(SharedItems.size)}
            remainUse={SharedItems.useLimit - SharedItems.use}
            sharedContent={<FileState state={'shared'} />}
            onOperationClicked={() => onOperationClicked(index)} />
        })} onItemClicked={onOperationClicked} />
      </Box>
    </Fade>
  )
}
export default SharedToMeWrapper