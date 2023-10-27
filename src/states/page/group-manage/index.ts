import { ConfirmDeleteDialogStore } from 'src/states/common/ConfirmDeleteDialogStore'
import { LoadingStore } from 'src/states/common/LoadingStore'
import { Dispatch, SetStateAction, useState } from 'react'
import { useStore } from 'reto'
import { PolicySelectData } from 'src/types/models/DataModels'
import { Tunnel } from 'src/service/models'

export interface GroupManagePageStates {

}

export interface GroupManagePageStore extends GroupManagePageStates {

}

export function GroupManagePageStore(): GroupManagePageStore {
  return {
  }
}
