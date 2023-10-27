import { Delete, ErrorOutline } from '@material-ui/icons';
import { Box, Stack } from '@mui/material';
import { FolderArrowUp } from 'mdi-material-ui';
import OperationItem from 'src/components/common/OperationItem';
import Section from 'src/components/common/Section';
import VerticalList from 'src/components/common/VerticalList';
import { PolicyOperationMenuProps } from '../../../types/ComponentProps';
import PolicyItem from '../../common/PolicyItem/index';



const PolicyOperationMenu = ({ policyName, onOperationClicked }: PolicyOperationMenuProps) => {
    return (
        <Stack m={1}>
            <Box borderRadius={3}>
                <Box mt={2} mb={2} width={'100%'} display='flex' justifyContent={'center'}>
                    <PolicyItem name={policyName} createdTime={null} description={null} />
                </Box>
                <Section title='策略操作'>
                    <VerticalList items={[
                        <OperationItem icon={<FolderArrowUp fontSize='large' />} name={'编辑'} onclick={() => onOperationClicked('edit')} />,
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


export default PolicyOperationMenu
