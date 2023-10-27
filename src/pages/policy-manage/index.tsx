// ** MUI Imports

// ** Demo Components Imports
import { makeStyles } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { Fab } from '@mui/material'
import { Provider } from 'reto'
import { ConfirmDeleteDialogStore } from 'src/states/common/ConfirmDeleteDialogStore'
import { LoadingStore } from 'src/states/common/LoadingStore'
import { PolicyManagePageStore } from 'src/states/page/policy-manage'
import PolicyManageWrapper from '../../components/policy-manage/index'

const PolicyManagePage = () => {
  return (
    <Provider of={LoadingStore} memo>
      <Provider of={ConfirmDeleteDialogStore} memo>
        <Provider of={PolicyManagePageStore} memo>
          <PolicyManageWrapper />
        </Provider>
      </Provider>
    </Provider>
  )
}

export default PolicyManagePage
