import { ServiceResponse } from 'src/service/types'
//使对象可以用字符串索引成员
export interface IStringIndex {
  [key: string]: any
}

/**
 *
 * @export
 * @enum {string}
 */
export enum StatusCode {
  NUMBER_0 = 0,
  NUMBER_1 = 1,
  NUMBER_2 = 2,
  NUMBER_3 = 3,
  NUMBER_4 = 4,
  NUMBER_9 = 9,
  NUMBER_10 = 10
}

//
export interface DeviceMetaDataResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof DeviceMetaDataResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof DeviceMetaDataResponse
   */
  message?: string | null
  /**
   *
   * @type {DeviceMetaData}
   * @memberof DeviceMetaDataResponse
   */
  data?: DeviceMetaData
}

export interface DeviceMetaData extends IStringIndex {
  /**
   *
   * @type {string}
   * @memberof DeviceMetaData
   */
  host?: string | null
  /**
   *
   * @type {Array<Tunnel>}
   * @memberof DeviceMetaData
   */
  tunnels?: Array<Tunnel> | null
}

//数据管理页面
export interface DataManageSubTableData extends IStringIndex {
  id: number
  name: string
  ownerId: string
  createTime: number
  useCount: number
}

// 数据通道数据详情
export interface TunnelDataInfos extends IStringIndex {
  id: number
  createdTime: string
  dataId: string
  dataName: string
  md5: string
  ownerId: string
  tunnelId: number
}
// 数据通道数据详情
export interface TunnelDataInfos extends IStringIndex {
  id: number
  createdTime: string
  dataId: string
  dataName: string
  md5: string
  ownerId: string
  tunnelId: number
}
export interface DataManageData extends IStringIndex {
  id: number
  name: string
  uniqueId: string
  owner: string
  createTime: number
  useCount: number
}

//策略管理页面数据

export interface PolicyEditorSubTableData extends IStringIndex {
  id: number
  name: string
  createTime: number
}

export interface PolicyEditorData extends IStringIndex {
  id: number
  name: string
  description: string
  owner: string
  tunnelCount: number
  createTime: number
}

//新建/更新数据通道时，需要的策略数据
export interface PolicySelectData extends IStringIndex {
  id: string
  index: number
  name: string
}

//
export interface TunnelSelectData extends IStringIndex {
  id?: number
  index: number
  name: string
}

export interface RoleSelectData extends IStringIndex {
  id?: string
  name?: string
}

export interface PolicyAttributeData extends IStringIndex {
  id: number
  name: string
  defaultValue?: string
  placeHolder?: string
}

//数据通道管理页面数据
export interface TunnelSubTableData extends IStringIndex {
  id: number
  name: string
  uniqueId: string
  createTime: number
  target: string
}

// export interface TunnelData extends IStringIndex {
//     id: number,
//     name: string,
//     policyName: string,
//     provideDataCount: number,
//     owner: string,
//     createTime: number,
//     subTableData: TunnelSubTableData[]
// }

// export interface TunnelData extends IStringIndex {
//     id: number,
//     name: string,
//     policyName: string,
//     provideDataCount: number,
//     owner: string,
//     createTime: number,
//     subTableData: TunnelSubTableData[]
// }

export interface Tunnel extends IStringIndex {
  id: number
  name: string
  description: string
  createdTime: string
  ownerId: string
  policyId: string
  updatedTime: string
}

export interface ControlData extends IStringIndex {
  name?: string
  checked?: boolean
}
//目录编辑页面数据

export interface CatalogSubTableData extends IStringIndex {
  id: number
  name: string
  createTime: number
}

export interface CatalogData extends IStringIndex {
  id: number
  name: string
  ownDataCount: number
  tunnelCount: number
  provideDataCount: number
  createTime: number
  subTableData: CatalogSubTableData[]
}

export interface CatalogFormData extends IStringIndex {
  name: string
}

//添加成功的返回数据
export interface SuccessData extends IStringIndex {
  status: number
  message: string
  data: object
}

export interface DataInfos extends IStringIndex {
  createdTime: string
  dataId: string
  dataName: string
  id: number
  md5: string
  ownerId: string
  tunnelId: number
}
//更新时需要获取的已有数据
export interface TunnelDetailData extends IStringIndex {
  id: number
  name: string
  description: string
  policyId: string
  dataInfos: DataInfos[]
}
// {
//   "rules":[
//     //限制使用的用户id
//     {
//       "type":"user",
//       "value":"uuid"
//     },
//     //限制使用的时间
//     {
//       "type":"useTime",
//       "value":{
//         "from":1000000,//时间戳
//         "to":1000000,
//         "delete":true //到时间是否删除
//       }
//     },
//     //可给予数据的设备url
//     {
//       "type":"target",
//       "value":"deviceurl"
//     },
//     //用户权限
//     {
//       "type":"role",
//       "value":"admin"
//     },
//     //用户token属性
//     {
//       "type":"claim",
//       "value":[
//         //name和value键值对数组
//         {
//           "name":"name",
//           "value":"value"
//         }
//       ]
//     },
//     //用户可访问的次数
//     {
//       "type":"count",
//       "value":10,
//     },
//     //用户可访问的频率(次/秒)
//     {
//       "type":"peroid",
//       "value":100
//     }
//   ]
// }
export interface Rule extends IStringIndex {
  type: string
  value: any
}
export type MaybeFailedResponse<T> = ServiceResponse<T> | undefined
export type GetCatalogsResponse = MaybeFailedResponse<CatalogData[]>
export type GetTunnelsResponse = MaybeFailedResponse<Tunnel[]>
export type GetPoliciesResponse = MaybeFailedResponse<PolicyEditorData[]>
export type GetDataResponse = MaybeFailedResponse<DataManageData[]>
export type TunnelDetailDataResponse = MaybeFailedResponse<TunnelDetailData>
export type SuccessDataResponse = MaybeFailedResponse<SuccessData[]>
