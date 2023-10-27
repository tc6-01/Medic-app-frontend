import { sizeToString } from 'src/utils/sizeToString';
import { toLocalTimeString } from 'src/utils/time';
import { FileListProps } from '../../../types/ComponentProps';
import FileItem from "../FileItem";
import FileState from '../FileState';
import VerticalList from "../VerticalList";


const FileList = ({ items, onOperationClicked }: FileListProps) => {
    return (
        <VerticalList items={
            items.map((item, index) => {
                return <FileItem key={index}
                    fileName={item.name}
                    fileSize={sizeToString(item.size)}
                    fileTime={toLocalTimeString(item.expire)}
                    remainUse={item.useLimit - item.use}
                    sharedContent={<FileState state={item.state} />}
                    onOperationClicked={() => onOperationClicked(index)}
                />
            })
        } />
    )

}


export default FileList
