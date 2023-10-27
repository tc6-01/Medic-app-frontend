// ** MUI Imports

// ** Demo Components Imports
import { Provider } from 'reto'
import { ConfirmDeleteDialogStore } from 'src/states/common/ConfirmDeleteDialogStore'
import { LoadingStore } from 'src/states/common/LoadingStore'
import { PolicyManagePageStore } from 'src/states/page/policy-manage'
import { CreatePolicyPageStore } from 'src/states/page/policy-manage/CreatePolicyPageStore'
import GroupManagePageWrapper from '../../components/group-manage/index'
const PolicyEditorPage = () => {
  return (
    <Provider of={LoadingStore} memo>
      <Provider of={ConfirmDeleteDialogStore} memo>
        <Provider of={PolicyManagePageStore} memo>
          <Provider of={CreatePolicyPageStore} memo>
            <GroupManagePageWrapper />
          </Provider>
        </Provider>
      </Provider>
    </Provider>
  )
}

export default PolicyEditorPage
