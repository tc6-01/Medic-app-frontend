import { BottomDrawerStore } from "src/states/global/BottomDrawerStore";
import { FileItemData, FileManageOperationType, SpeedDialMenuOptionProps } from "src/types/ComponentProps";
import { Fade, Stack, Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import { useStore, Provider } from "reto";
import FileList from 'src/components/common/FileList';
import Section from "../common/Section";
import FileOperationMenu from "./FileOperationMenu";
import { noUserSelect } from "src/styles/NoUserSelect";
import SpeedDialMenu from "../common/PopMenu";
import { Favorite, FileCopy, Print, Save, Share } from "@material-ui/icons";
import { BookOutline } from "mdi-material-ui";
import { useNavigate } from "react-router";
import { bool } from "prop-types";
import { getFileList } from "src/service/medic"
import Toast from "../common/Toast";
const FileManageWrapper = () => {
    const bottomeDrawerStates = useStore(BottomDrawerStore)
    const navi = useNavigate()
    const [files, setFiles] = useState<FileItemData[]>([]);
    // 使用 useEffect 来在组件挂载后获取数据
    useEffect(() => {
        // 获取文件数据
        getFileList().then((res) => {
            setFiles(res.data.map((item, idx) => {
                const owner = localStorage.getItem('userName')
                return {
                    id: idx,
                    fileName: item.fileName,
                    size: item.fileSize,
                    state: owner == item.owner ? 'owned' : 'fromShared',
                    owner: item.owner,
                    use: item.use,
                    useLimit: item.useLimit,
                    expire: item.expire,
                    isAllow:item.isAllow
                }
            }))
        })
    }, []); // 空依赖数组意味着这个 useEffect 只会在组件挂载后执行一次

    const handleFileOperation = (ty: FileManageOperationType, index: number) => {
        switch (ty) {
            case 'delete':
                console.log('delete files at index', index);
                break;
            case 'open':
                bottomeDrawerStates.setBottomDrawerOpen(false)
                navi('/pdfpreview', { state: files[index] })//传入Id值
                break;
            case 'share':
                bottomeDrawerStates.setBottomDrawerOpen(false)
                if(files[index].isAllow != 1){
                    Toast.warning("当前病历并未分配共享权限，请联系共享来源用户")
                    break;
                }   
                navi('/policymanage/create', { state: { id: files[index].fileName } })//传入Id值
                break;
            case 'detail':
                bottomeDrawerStates.setBottomDrawerOpen(false)
                navi('/fileshare/details', {state:files[index]})
                break;
        }
    }

    const onOperationClickHandler = (index: number) => {
        bottomeDrawerStates.setBottomDrawerOpen(true)
        bottomeDrawerStates.setBottomDrawerContent(
            <FileOperationMenu fileName={files[index].fileName} onOperationClicked={(ty) => handleFileOperation(ty, index)} />
        )
    }
    const noSelect = noUserSelect()
    return (
        <Fade in={true}>
            <Stack className={noSelect.root}>
                <Section title={'所有文件'}>
                    <FileList items={files} onOperationClicked={onOperationClickHandler} />
                </Section>
                {/* <SpeedDialMenu options={actions} /> */}
            </Stack>
        </Fade>
    )
}
export default FileManageWrapper
