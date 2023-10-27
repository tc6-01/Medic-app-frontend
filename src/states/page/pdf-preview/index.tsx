// ** MUI Imports

// ** Demo Components Imports
import PdfPreviewWrapper from 'src/components/pdf-preview'
import { Provider } from 'reto'
import { ConfirmDeleteDialogStore } from 'src/states/common/ConfirmDeleteDialogStore'
import { LoadingStore } from 'src/states/common/LoadingStore'
import { FileSharePageStore } from 'src/states/page/file-share'

export interface PdfPreviewPageStates {

}

export interface PdfPreviewPageStore extends PdfPreviewPageStates {

}

export function PdfPreviewPageStore(): PdfPreviewPageStore {
  return {
  }
}
