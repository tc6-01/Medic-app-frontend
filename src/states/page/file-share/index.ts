import { Dispatch, SetStateAction, useState } from 'react'
import { useStore } from 'reto'
import { Tunnel } from 'src/service/models'
import { ConfirmDeleteDialogStore } from 'src/states/common/ConfirmDeleteDialogStore'
import { LoadingStore } from 'src/states/common/LoadingStore'


// 新建数据通

export interface FileSharePageStates {
  rows: Tunnel[]
  editorDialogOpen: boolean
  updateDialogOpen: boolean
}

export interface FileSharePageStore
  extends FileSharePageStates,
  LoadingStore,
  ConfirmDeleteDialogStore {
  setRows: Dispatch<SetStateAction<Tunnel[]>>
  setEditorDialogOpen: Dispatch<SetStateAction<boolean>>
  setUpdateDialogOpen: Dispatch<SetStateAction<boolean>>
}

export function FileSharePageStore(): FileSharePageStore {
  const loadingStore = useStore(LoadingStore)
  const confirmDeleteDialogStore = useStore(ConfirmDeleteDialogStore)
  const [rows, setRows] = useState<Tunnel[]>([])
  const [editorDialogOpen, setEditorDialogOpen] = useState(false)
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false)
  return {
    ...loadingStore,
    ...confirmDeleteDialogStore,
    rows,
    setRows,
    editorDialogOpen,
    setEditorDialogOpen,
    updateDialogOpen,
    setUpdateDialogOpen
  }
}
