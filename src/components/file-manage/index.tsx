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
const FileManageWrapper = () => {
    const bottomeDrawerStates = useStore(BottomDrawerStore)
    const navi = useNavigate()
    const actions: SpeedDialMenuOptionProps[] = [
        { icon: <FileCopy fontSize="large" />, name: '新建共享资源', onClick: () => { navi('/filemanage/create') } },
        { icon: <BookOutline fontSize="large" />, name: '添加策略', onClick: () => { navi('/policymanage/create') } },
    ];
    const [files, setFiles] = useState<FileItemData[]>([]);
    // 使用 useEffect 来在组件挂载后获取数据
    useEffect(() => {
        // 获取文件数据
        getFileList().then((res) => {
            setFiles(res.data.map((item, idx) => {
                const owner = localStorage.getItem('username')
                return {
                    id: idx,
                    name: item.fileName,
                    size: item.fileSize,
                    state: owner == item.owner ? 'owned' : 'fromShared',
                    owner: item.owner,
                    use: item.use,
                    useLimit: item.useLimit,
                    expire: item.expire
                }
            }))
        })
    }, []); // 空依赖数组意味着这个 useEffect 只会在组件挂载后执行一次

    const handleFileOperation = (ty: FileManageOperationType, index: number) => {
        console.log(files[index]);
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
                navi('/policymanage/create', { state: { id: files[index].name } })//传入Id值
                break;
            case 'detail':
                console.log('detail files at index', index);
                break;
        }
    }

    const onOperationClickHandler = (index: number) => {
        bottomeDrawerStates.setBottomDrawerOpen(true)
        bottomeDrawerStates.setBottomDrawerContent(
            <FileOperationMenu fileName={files[index].name} onOperationClicked={(ty) => handleFileOperation(ty, index)} />
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
