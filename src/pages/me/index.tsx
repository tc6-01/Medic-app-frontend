// ** MUI Imports

// ** Demo Components Imports
import MePageWrapper from 'src/components/me'
import { Provider } from 'reto'
import { ConfirmDeleteDialogStore } from 'src/states/common/ConfirmDeleteDialogStore'
import { LoadingStore } from 'src/states/common/LoadingStore'
import { FileSharePageStore } from 'src/states/page/file-share'

const MePage = () => {
  return (
    <Provider of={LoadingStore} memo>
      <Provider of={ConfirmDeleteDialogStore} memo>
        <Provider of={FileSharePageStore} memo>
          <MePageWrapper />
        </Provider>
      </Provider>
    </Provider>
  )
}

export default MePage
