import { BottomDrawerStates } from '../../global/BottomDrawerStore';
import { Dispatch, SetStateAction, useState } from 'react'
import { useStore } from 'reto'
import { Policy } from 'src/service/models'
import { ConfirmDeleteDialogStore } from '../../common/ConfirmDeleteDialogStore'
import { LoadingStore } from 'src/states/common/LoadingStore'
import { BottomDrawerStore } from '../../global/BottomDrawerStore';

export interface PolicyManagePageStates {
  rows: Policy[]
}

export interface PolicyManagePageStore
  extends PolicyManagePageStates,
  LoadingStore,
  BottomDrawerStore {
  setRows: Dispatch<SetStateAction<Policy[]>>
}

export function PolicyManagePageStore(): PolicyManagePageStore {
  const loadingStore = useStore(LoadingStore)
  const drawerStore = useStore(BottomDrawerStore)
  const [rows, setRows] = useState<Policy[]>([])
  return {
    ...loadingStore,
    ...drawerStore,
    rows,
    setRows,
  }
}
