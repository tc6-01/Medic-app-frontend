import { Delete, ErrorOutline, Share } from '@material-ui/icons';
import { Box, Stack } from '@mui/material';
import { FolderArrowUp } from 'mdi-material-ui';
import OperationItem from 'src/components/common/OperationItem';
import Section from 'src/components/common/Section';
import SimpleFileItem from 'src/components/common/SimpleFileItem';
import VerticalList from 'src/components/common/VerticalList';
import { FileOperationMenuProps } from '../../../../types/ComponentProps';



const ShredToMeFileOperationMenu = ({ fileName, onOperationClicked }: FileOperationMenuProps) => {
    return (
        <Stack m={1}>
            <Box borderRadius={3}>
                <SimpleFileItem fileName={fileName} />
                <Section title='文件操作'>
                    <VerticalList items={[
                        <OperationItem icon={<FolderArrowUp fontSize='large' />} name={'打开'} onclick={() => onOperationClicked('open')} />,
                        <OperationItem icon={<Share fontSize='large' />} name={'共享'} onclick={() => onOperationClicked('share')} />,
                        <OperationItem icon={<Delete fontSize='large' />} name={'删除'} onclick={() => onOperationClicked('delete')} />
                    ]} />
                </Section>
                <Section title='更多操作'>
                    <VerticalList items={[
                        <OperationItem icon={<ErrorOutline fontSize='large' />} name={'详细信息'} onclick={() => onOperationClicked('detail')} />
                    ]} />
                </Section>
            </Box>

        </Stack>
    )

}


export default ShredToMeFileOperationMenu
