import { useEffect } from "react"
import { useNavigate } from "react-router"
import { getPolicies } from "src/service/policyApi"
import FileItem from "../../common/FileItem"
import VerticalList from "../../common/VerticalList"
import { useStore } from 'reto';
import { SharedByMeStore } from "src/states/page/file-share/sharedbyme"
import FileState from "src/components/common/FileState"
import { BottomDrawerStore } from '../../../states/global/BottomDrawerStore';
import FileOperationMenu from "./ShredByMeFileOperationMenu"
import ShredByMeFileOperationMenu from "./ShredByMeFileOperationMenu"
import { Box, Fade } from "@mui/material"
import { FileToFileItemData, SharedFileToFileItemData, getFileList, myShareFile } from "src/service/medic"
import { toLocalTimeString } from "src/utils/time"
import { sizeToString } from "src/utils/sizeToString"
import { shareFile } from '../../../service/medic';

const SharedByMeWrapper = () => {
  const navi = useNavigate()
  const states = useStore(SharedByMeStore)
  const bottomeDrawerStates = useStore(BottomDrawerStore)
  useEffect(() => {
    myShareFile().then(res => {
      if (res && res.code === 0) {
        if (Array.isArray(res.data)) {
          states.setFiles(res.data)
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
        bottomeDrawerStates.setBottomDrawerOpen(false)
        navi('/pdfpreview', { state: SharedFileToFileItemData(index, states.files[index]) })//传入Id值
        break;
      case 'detail':
        console.log('detail files at index', index);
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
