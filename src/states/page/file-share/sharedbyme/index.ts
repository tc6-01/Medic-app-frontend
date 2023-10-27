import { ConfirmDeleteDialogStore } from 'src/states/common/ConfirmDeleteDialogStore'
import { LoadingStore } from 'src/states/common/LoadingStore'
import { Dispatch, SetStateAction, useState } from 'react'
import { useStore } from 'reto'
import { PolicySelectData } from 'src/types/models/DataModels'
import { Tunnel } from 'src/service/models'
import { SharedFile } from 'src/service/medic'

type SnackBarType = 'success' | 'error' | 'warning' | 'info'

// 新建数据通道
export interface SharedByMeStates {
  files: SharedFile[]
}

export interface SharedByMeStore
  extends SharedByMeStates,
  LoadingStore {
  setFiles: Dispatch<SetStateAction<any[]>>
}

export function SharedByMeStore(): SharedByMeStore {
  const loadingStore = useStore(LoadingStore)
  const confirmDeleteDialogStore = useStore(ConfirmDeleteDialogStore)
  const [files, setFiles] = useState<any[]>([])
  return {
    ...loadingStore,
    ...confirmDeleteDialogStore,
    files,
    setFiles
  }
}
