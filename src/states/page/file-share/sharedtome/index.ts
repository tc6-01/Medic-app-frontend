import { Dispatch, SetStateAction, useState } from 'react'
import { useStore } from 'reto'
import { BeSharedFile } from 'src/service/medic'
import { ConfirmDeleteDialogStore } from 'src/states/common/ConfirmDeleteDialogStore'
import { LoadingStore } from 'src/states/common/LoadingStore'


// 新建数据通道
export interface SharedToMeStates {
  files: BeSharedFile[]
}

export interface SharedToMeStore
  extends SharedToMeStates,
  LoadingStore {
  setFiles: Dispatch<SetStateAction<any[]>>
}

export function SharedToMeStore(): SharedToMeStore {
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
