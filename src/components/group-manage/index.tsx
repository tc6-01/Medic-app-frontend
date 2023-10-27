import { GroupOutlined } from '@material-ui/icons';
import { Stack } from '@mui/material';
import Section from 'src/components/common/Section';
import GroupItem from '../common/GroupItem/index';


const AddedGroups = [
    {
        id: 1,
        name: '组1',
        description: '这是一个组',
    },
    {
        id: 2,
        name: '组2',
        description: '这是一个组',
    },
    {
        id: 3,
        name: '组3',
        description: '这是一个组',
    },
]

const ownedGroups = [
    {
        id: 1,
        name: '组1',
        description: '这是一个组',
    },
    {
        id: 2,
        name: '组2',
        description: '这是一个组',
    },
    {
        id: 3,
        name: '组3',
        description: '这是一个组',
    },
]

const GroupManagePageWrapper = () => {

    return <Stack>
        <Section title={'我加入的群组'}>
            {AddedGroups.map((item, index) => {
                return <GroupItem groupName={item.name} description={item.description} icon={<GroupOutlined fontSize='large' />} />
            })}
        </Section>
        <Section title={'我创建的群组'}>
            {ownedGroups.map((item, index) => {
                return <GroupItem groupName={item.name} description={item.description} icon={<GroupOutlined fontSize='large' />} />
            })}
        </Section>
    </Stack>
}

export default GroupManagePageWrapper
