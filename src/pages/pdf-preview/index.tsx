// ** MUI Imports

// ** Demo Components Imports
import PdfPreviewWrapper from 'src/components/pdf-preview'
import { Provider } from 'reto'
import { ConfirmDeleteDialogStore } from 'src/states/common/ConfirmDeleteDialogStore'
import { LoadingStore } from 'src/states/common/LoadingStore'
import { FileSharePageStore } from 'src/states/page/file-share'
import { useLocation } from "react-router-dom";
import { FileItemData } from 'src/types/ComponentProps'
const PdfPreviewPage = () => {
  const location = useLocation();
  const file = (location.state as FileItemData);
  document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0');
  return (
    <Provider of={LoadingStore} memo>
      <Provider of={ConfirmDeleteDialogStore} memo>
        <Provider of={FileSharePageStore} memo>
          <PdfPreviewWrapper file={file} />
        </Provider>
      </Provider>
    </Provider>
  )
}

export default PdfPreviewPage
