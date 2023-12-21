import { Breakpoint, SelectChangeEvent } from '@mui/material'
import { JSXElementConstructor, ReactElement, ReactNode, SyntheticEvent } from 'react'
import { DataBind } from 'src/service/models'
import { number } from 'prop-types';
import {
  PolicySelectData,
  PolicyEditorData,
  DataManageData,
  Tunnel,
  CatalogData,
  DataInfos,
  TunnelSelectData,
  ControlData,
  RoleSelectData
} from './models/DataModels'

//策略管理页面组件的属性
export interface TextInputProps {
  id?: string
  name?: string
  defaultValue?: string
  placeHolder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// export interface SelectInputProps {
//     name: string,
//     options: string[]
//     defaultValue?: string,
//     placeHolder: string,
//     onChange?: (event: SelectChangeEvent) => void
// }

// select框数据修改
// export interface SelectInputProps {
//     name: string,
//     options: string[]
//     defaultValue?: string,
//     placeHolder: string,
//     onChange?: (event: SelectChangeEvent) => void
// }

// select框数据修改
export interface SelectInputProps {
  id?: string
  name?: string
  options?: PolicySelectData[] | TunnelSelectData[] | RoleSelectData[]
  defaultValue?: string
  placeHolder: string
  onChange?: (event: SelectChangeEvent) => void
}

export interface ControlInputProps {
  items?: ControlData[]
}

export interface TimeInputProps {
  id?: string
  title?: string
  value?: Date
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface SwitchInputProps {
  id?: string
  name: string
  enabled: boolean
  onChange?: (event: SyntheticEvent<Element, Event>) => void
  checked?: boolean
}
export type NullableDate = Date | null | undefined

export interface DateInputProps {
  title: string
  defaultValue?: NullableDate
  onChange?: (date: NullableDate, inputValue: string | undefined) => void
}
export interface DateRangeInputProps {
  fromTitle: string
  toTitle: string
  defaultValue?: [NullableDate, NullableDate]
  onFromChange?: (date: NullableDate, inputValue: string | undefined) => void
  onToChange?: (date: NullableDate, inputValue: string | undefined) => void
}
export interface PolicyCreateItemProps {
  type: 'text' | 'select' | 'switch' | 'title' | 'control' | 'time'
  display?: boolean
  value?: TextInputProps | SelectInputProps | SwitchInputProps | ControlInputProps | TimeInputProps
}

export interface PolicyEditorProps {
  items: PolicyCreateItemProps[]
}

export interface PolicyTableRowProps {
  rows: PolicyEditorData[]
}

//数据管理页面组件的属性

export interface DataTableProps {
  rows: DataManageData[]
}

//数据通道管理页面组件的属性
export interface TunnelTableProps {
  rows: Tunnel[]
}

//目录管理页面组件的属性

export interface CatalogTableProps {
  rows: CatalogData[]
}

//通用组件的属性
export interface LoadingProps {
  loading: boolean
  children: ReactNode
}

export interface TopSnackBarProps {
  open: boolean
  closeDuration: number
  onClose?: () => void
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

export interface SubTableProps {
  title: string
  fields: string[]
  values: string[][]
}

export interface CollapseTableRowField {
  name: string
  value: string
}

export interface CollapseTableRowProps {
  values: string[]
  subTableProps: SubTableProps
  operations?: ReactNode
}

//后台数据没有传数据通道详情 ，先这样
export interface TableBodyRowProps {
  values: string[]
  operations?: ReactNode
}
//后台数据没有传数据通道详情 ，先这样
export interface TableBodyRowProps {
  values: string[]
  operations?: ReactNode
}

export interface ModalDialogWithoutButtonProps {
  open: boolean
  title: string
  maxWidth?: Breakpoint
  onClose?: (reason: 'escapeKeyDown' | 'backdropClick') => void
  children?: ReactNode
}

export interface ModalDialogProps extends ModalDialogWithoutButtonProps {
  onOkClick?: () => void
  onCancelClick?: () => void
}

export interface ConfimDialogProps {
  open: boolean
  onOkClick: () => void
  onCancelClick: () => void
}

export interface SearchBarProps {
  onSearchClick?: (cond: string) => void
}

export interface SearchTextFieldProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  title: string
  placeHolder?: string
}

export interface DrawerProps {
  open: boolean
  onClose: () => void
  onOpen: () => void
  children?: ReactNode
  puller?: ReactNode
}

export interface DetailContentProps {
  title: string
  items: DataBind[] | undefined
}
// export interface FullScreenDialogProps {
//     isOpen: boolean,
//     onOpen?: React.MouseEventHandler<HTMLButtonElement>,
//     onOpenClick?: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void),
//     onCloseClick?: React.MouseEventHandler<HTMLButtonElement>
// }

//新建数据通道/数据传入
export interface CreateProps {
  getAll?: Function
}

export interface UpdateProps {
  id: number | string
  updateById: Function
}

export type FileState = 'shared' | 'fromShared' | 'owned'

export interface FileItemData {
  id: number
  fileName: string
  size: number
  expire: number
  isAllow:number
  owner: string
  use: number
  useLimit: number
  state: FileState
}
export interface FileItemProps {
  fileName: string
  fileSize: string
  fileTime: string
  remainUse: number
  sharedContent?: ReactNode,
  onOperationClicked?: () => void
}

export interface FileStateProps {
  state: FileState
}

export interface VerticalListProps {
  items: ReactNode[]
  onItemClicked?: (index: number) => void
}

export interface SectionProps {
  title: string
  children?: ReactNode
}



export interface FileListProps {
  items: FileItemData[]
  onOperationClicked?: (index: number) => void
}

export interface GroupItemProps {
  groupName: string
  description: string
  icon: ReactNode,
  onClick?: () => void,
}

export interface OperationItemProps {
  icon: ReactNode
  name: string
  onclick?: () => void
}

export interface SimpleFileItemProps {
  fileName: string
}


export type FileManageOperationType = 'open' | 'delete' | 'share' | 'detail'

export interface FileOperationMenuProps {
  fileName: string
  onOperationClicked?: (operationType: FileManageOperationType) => void
}
export type PolicyOperationType = 'edit' | 'delete' | 'detail';
export interface PolicyOperationMenuProps {
  policyName: string
  onOperationClicked?: (operationType: PolicyOperationType) => void
}

export interface ProgressProps {
  progressItemName: string
  color?: 'primary' | 'secondary'
  value?: number
  variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query'
  valueBuffer?: number;
  icon: ReactNode
}

export interface SharedByMeItemProps {
  fileName: string
  fileSize: string
  fileTime: string
  onOperationClicked?: () => void
}
export interface SharedItemProps {
  number: string
  description: string
  icon: ReactNode
}
export interface SharedByMeListProps {
  items: SharedFileItemData[]
  onOperationClicked?: (index: number) => void
}

export interface SharedFileItemData {
  id: number
  fileName: string
  size: number
  time: number
}

export interface ProgressFileItemData {
  id: number
  name: string
  // size: number
}

export interface PasswordInputProps {
  password: string
  title: string
  showPassword: boolean
  onChange?: (password: string) => void
  onShowPasswordChange?: () => void
}


export interface PolicyItemData {
  name: string
  createdTime: string
  description: string
}
export interface PolicyItemProps extends PolicyItemData {
  onDetailClick?: () => void
}

export interface PolicyListProps {
  items: PolicyItemData[]
  onDetailClick?: (index: number) => void
}

export interface SpeedDialMenuOptionProps {
  icon: ReactNode
  name: string
  onClick?: () => void
}

export interface SpeedDialMenuProps {
  options: SpeedDialMenuOptionProps[]
}
