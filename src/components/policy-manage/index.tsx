// ** MUI Imports

// ** Demo Components Imports
import { Fade, Grid, Stack, Typography } from '@mui/material';
import { BookOutline } from 'mdi-material-ui';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useStore } from 'reto';
import { deletePolicy, getPolicies } from 'src/service/policyApi';
import { SnackBarStore } from 'src/states/global/TopSnackBarStore';
import { PolicyManagePageStore } from 'src/states/page/policy-manage';
import { noUserSelect } from 'src/styles/NoUserSelect';
import { PolicyOperationType } from 'src/types/ComponentProps';
import { CreatePolicyPageStore } from '../../states/page/policy-manage/CreatePolicyPageStore';
import PolicyItem from '../common/PolicyItem';
import PopMenu from '../common/PopMenu';
import VerticalList from '../common/VerticalList';
import PolicyOperationMenu from './PolicyOperationMenu';

const PolicyManageWrapper = () => {
  const navi = useNavigate()
  const states = useStore(PolicyManagePageStore)
  const topSnackBarStates = useStore(SnackBarStore)
  const editPolicyStore = useStore(CreatePolicyPageStore)
  useEffect(() => {
    getPolicies().then(res => {
      if (res && res.status === 0) {
        if (Array.isArray(res.data)) {
          console.log(res.data)
          states.setRows(res.data)
          states.setLoading(false)
        } else {
          states.setRows([res.data])
        }
      }
    })
  }, [])
  const handlePolicyOperation = (ty: PolicyOperationType, index: number) => {
    switch (ty) {
      case 'delete':
        deletePolicy(states.rows[index].id).then(res => {
          states.setBottomDrawerOpen(false)
          if (res && res.status === 0) {
            states.setRows(states.rows.filter((_, i) => i !== index))
            topSnackBarStates.setSnackBarOpen(true)
            topSnackBarStates.setSnackBarMessage('删除成功')
          } else {
            topSnackBarStates.setSnackBarOpen(true)
            topSnackBarStates.setSnackBarType('error')
            topSnackBarStates.setSnackBarMessage('删除失败')
          }
        })
        break;
      case 'detail':
        console.log('detail files at index', index);
        break;
      // case 'edit':
      //   editPolicyStore.
      //     states.rows[index]
      //   break;
    }
  }

  const onOperationClickHandler = (index: number) => {
    states.setBottomDrawerOpen(true)
    states.setBottomDrawerContent(
      <PolicyOperationMenu policyName={states.rows[index].name} onOperationClicked={(ty) => handlePolicyOperation(ty, index)} />
    )
  }
  return (
    <Fade in={true}>
      <Stack alignContent='space-around' className={noUserSelect().root}>
        {
          states.rows ? <VerticalList items={states.rows.map((item, index) => {
            return <PolicyItem name={item.name} createdTime={null} description={item.description} onDetailClick={() => onOperationClickHandler(index)} />
          })} /> : <Grid><Typography>空</Typography></Grid>
        }
        <PopMenu options={[
          { name: '新建共享', icon: <BookOutline />, onClick: () => navi('/policymanage/create') },
        ]} />
      </Stack>
    </Fade>
  )
}

export default PolicyManageWrapper
