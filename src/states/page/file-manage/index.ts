import { UserData } from 'src/service/models'
import { Order } from 'src/utils/order'
import { Dispatch, SetStateAction, useState } from 'react'
import { useStore } from 'reto'
import { ConfirmDeleteDialogStore } from 'src/states/common/ConfirmDeleteDialogStore'

export interface FileManagePageStates {
  rows: UserData[]
  order: Order
  orderBy: string
  page: number
  rowsPerPage: number
  selected: any[]
  dense: boolean
  editorDialogOpen: boolean
  downloadDialogOpen: boolean
}

export interface FileManagePageStore extends FileManagePageStates {
  setRows: Dispatch<SetStateAction<UserData[]>>
  setOrder: Dispatch<SetStateAction<Order>>
  setOrderBy: Dispatch<SetStateAction<string>>
  setPage: Dispatch<SetStateAction<number>>
  setRowsPerPage: Dispatch<SetStateAction<number>>
  setSelected: Dispatch<SetStateAction<any[]>>
  setDense: Dispatch<SetStateAction<boolean>>
  setEditorDialogOpen: Dispatch<SetStateAction<boolean>>
  setDownloadDialogOpen: Dispatch<SetStateAction<boolean>>
}

export function FileManagePageStore(): FileManagePageStore {
  const confirmDeleteDialogStore = useStore(ConfirmDeleteDialogStore)
  const [rows, setRows] = useState<UserData[]>([])
  const [order, setOrder] = useState('asc' as Order)
  const [orderBy, setOrderBy] = useState('name')
  const [selected, setSelected] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [editorDialogOpen, setEditorDialogOpen] = useState(false)
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false)
  return {
    ...confirmDeleteDialogStore,
    rows,
    setRows,
    order,
    setOrder,
    orderBy,
    setOrderBy,
    selected,
    setSelected,
    page,
    setPage,
    dense,
    setDense,
    rowsPerPage,
    setRowsPerPage,
    editorDialogOpen,
    setEditorDialogOpen,
    downloadDialogOpen,
    setDownloadDialogOpen
  }
}
