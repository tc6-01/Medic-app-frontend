import { ServiceResponse } from 'src/service/common'
import { TunnelSelectData } from 'src/types/models/DataModels'
//使对象可以用字符串索引成员
export interface IStringIndex {
  [key: string]: any
}

/**
 *
 * @export
 * @interface Response
 */
export interface Response extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof DeviceMetaDataDataResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof DeviceMetaDataDataResponse
   */
  message?: string | null
}

/**
 *
 * @export
 * @interface CreatePolicyRequest
 */
export interface CreatePolicyRequest extends IStringIndex {
  /**
   *
   * @type {string}
   * @memberof CreatePolicyRequest
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof CreatePolicyRequest
   */
  description?: string | null
  /**
   *
   * @type {Array<Rule>}
   * @memberof CreatePolicyRequest
   */
  rules?: Array<Rule> | null
}
/**
 *
 * @export
 * @interface CreateTunnelRequest
 */
export interface CreateTunnelRequest extends IStringIndex {
  /**
   *
   * @type {string}
   * @memberof CreateTunnelRequest
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof CreateTunnelRequest
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof CreateTunnelRequest
   */
  policyId?: string | null
}
/**
 *
 * @export
 * @interface DataBind
 */
export interface DataBind extends IStringIndex {
  /**
   *
   * @type {number}
   * @memberof DataBind
   */
  id?: number
  /**
   *
   * @type {number}
   * @memberof DataBind
   */
  tunnelId?: number
  /**
   *
   * @type {string}
   * @memberof DataBind
   */
  dataId?: string | null
  /**
   *
   * @type {string}
   * @memberof DataBind
   */
  ownerId?: string | null
  /**
   *
   * @type {string}
   * @memberof DataBind
   */
  dataName?: string | null
  /**
   *
   * @type {string}
   * @memberof DataBind
   */
  md5?: string | null
  /**
   *
   * @type {string}
   * @memberof DataBind
   */
  createdTime?: string
}

/**
 * 
 * @export
 * @interface DataBindIEnumerableDataResponse
 */
export interface DataBindIEnumerableDataResponse {
  /**
   * 
   * @type {StatusCode}
   * @memberof DataBindIEnumerableDataResponse
   */
  status?: StatusCode;
  /**
   * 业务响应消息
   * @type {string}
   * @memberof DataBindIEnumerableDataResponse
   */
  message?: string | null;
  /**
   * 
   * @type {Array<DataBind>}
   * @memberof DataBindIEnumerableDataResponse
   */
  data?: Array<DataBind> | null;
}
/**
 *
 * @export
 * @interface DataInfo
 */
export interface DataInfo extends IStringIndex {
  /**
   *
   * @type {string}
   * @memberof DataInfo
   */
  id?: string | null
  /**
   *
   * @type {string}
   * @memberof DataInfo
   */
  fileName?: string | null
  /**
   *
   * @type {string}
   * @memberof DataInfo
   */
  dataName?: string | null
  /**
   *
   * @type {string}
   * @memberof DataInfo
   */
  mD5?: string | null
  /**
   *
   * @type {MetaData}
   * @memberof DataInfo
   */
  metaData?: MetaData
}
/**
 *
 * @export
 * @interface DeviceMetaData
 */
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

//用户自己数据返回的格式
export interface UserData extends IStringIndex {
  createdTime?: string
  dataId?: null | string
  dataName?: null | string
  id?: number
  md5?: null | string
  ownerId?: null | string
  tunnelId?: number
}
/**
 *
 * @export
 * @interface DeviceMetaDataDataResponse
 */
export interface DeviceMetaDataDataResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof DeviceMetaDataDataResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof DeviceMetaDataDataResponse
   */
  message?: string | null
  /**
   *
   * @type {DeviceMetaData}
   * @memberof DeviceMetaDataDataResponse
   */
  data?: DeviceMetaData
}
/**
 *
 * @export
 * @interface DeviceMetaDataResponse
 */
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

/**
 *
 * @export
 * @interface UserDataResponse
 */
export interface UserDataResponse extends IStringIndex {
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
   * @type {UserData}
   * @memberof UserDataResponse
   */
  data?: UserData
}
/**
 *
 * @export
 * @interface InlineObject
 */
export interface InlineObject extends IStringIndex {
  /**
   *
   * @type {string}
   * @memberof InlineObject
   */
  Name?: string
  /**
   *
   * @type {string}
   * @memberof InlineObject
   */
  Description?: string
  /**
   *
   * @type {string}
   * @memberof InlineObject
   */
  PolicyId?: string
}
/**
 *
 * @export
 * @interface InlineObject1
 */
export interface InlineObject1 extends IStringIndex {
  /**
   *
   * @type {any}
   * @memberof InlineObject1
   */
  file?: any
}
/**
 *
 * @export
 * @interface Login
 */
export interface Login extends IStringIndex {
  /**
   *
   * @type {string}
   * @memberof Login
   */
  token: string
}
/**
 *
 * @export
 * @interface LoginResultResponse
 */
export interface LoginResultResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof LoginResultResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof LoginResultResponse
   */
  message?: string | null
  /**
   *
   * @type {Login}
   * @memberof LoginResultResponse
   */
  data?: Login
}
/**
 *
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse extends IStringIndex {
  /**
   *
   * @type {string}
   * @memberof LoginResponse
   */
  accessToken?: string | null
  /**
   *
   * @type {number}
   * @memberof LoginResponse
   */
  expireHours?: number
}
/**
 *
 * @export
 * @interface LoginResponseDataResponse
 */
export interface LoginResponseDataResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof LoginResponseDataResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof LoginResponseDataResponse
   */
  message?: string | null
  /**
   *
   * @type {LoginResponse}
   * @memberof LoginResponseDataResponse
   */
  data?: LoginResponse
}
/**
 *
 * @export
 * @interface LoginResponseResponse
 */
export interface LoginResponseResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof LoginResponseResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof LoginResponseResponse
   */
  message?: string | null
  /**
   *
   * @type {LoginResponse}
   * @memberof LoginResponseResponse
   */
  data?: LoginResponse
}
/**
 *
 * @export
 * @interface MetaData
 */
export interface MetaData extends IStringIndex {
  /**
   *
   * @type {string}
   * @memberof MetaData
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof MetaData
   */
  type?: string | null
  /**
   *
   * @type {string}
   * @memberof MetaData
   */
  ownerId?: string | null
  /**
   *
   * @type {string}
   * @memberof MetaData
   */
  uniqueId?: string | null
}

/**
 *
 * @export
 * @interface ObjectId
 */
export interface ObjectId extends IStringIndex {
  /**
   *
   * @type {number}
   * @memberof ObjectId
   */
  timestamp?: number
  /**
   *
   * @type {number}
   * @memberof ObjectId
   */
  machine?: number
  /**
   *
   * @type {number}
   * @memberof ObjectId
   */
  pid?: number
  /**
   *
   * @type {number}
   * @memberof ObjectId
   */
  increment?: number
  /**
   *
   * @type {string}
   * @memberof ObjectId
   */
  creationTime?: string
}

/**
 *
 * @export
 * @interface Policy
 */
export interface Policy extends IStringIndex {
  /**
   *
   * @type {string}
   * @memberof Policy
   */
  id?: string | null
  /**
   *
   * @type {string}
   * @memberof Policy
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof Policy
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof Policy
   */
  ownerId?: string | null
  /**
   *
   * @type {Array<Rule>}
   * @memberof Policy
   */
  rules?: Array<Rule> | null
}
/**
 *
 * @export
 * @interface PolicyDataResponse
 */
export interface PolicyDataResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof PolicyDataResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof PolicyDataResponse
   */
  message?: string | null
  /**
   *
   * @type {Policy}
   * @memberof PolicyDataResponse
   */
  data?: Policy
}
/**
 *
 * @export
 * @interface PolicyIEnumerableDataResponse
 */
export interface PolicyIEnumerableDataResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof PolicyIEnumerableDataResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof PolicyIEnumerableDataResponse
   */
  message?: string | null
  /**
   *
   * @type {Array<Policy>}
   * @memberof PolicyIEnumerableDataResponse
   */
  data?: Array<Policy> | null
}
/**
 *
 * @export
 * @interface PolicyIEnumerableResponse
 */
export interface PolicyIEnumerableResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof PolicyIEnumerableResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof PolicyIEnumerableResponse
   */
  message?: string | null
  /**
   *
   * @type {Array<Policy>}
   * @memberof PolicyIEnumerableResponse
   */
  data?: Array<Policy> | null
}
/**
 *
 * @export
 * @interface PolicyResponse
 */
export interface PolicyResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof PolicyResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof PolicyResponse
   */
  message?: string | null
  /**
   *
   * @type {Policy}
   * @memberof PolicyResponse
   */
  data?: Policy
}
/**
 *
 * @export
 * @interface PolicyWithoutId
 */
export interface PolicyWithoutId extends IStringIndex {
  /**
   *
   * @type {string}
   * @memberof PolicyWithoutId
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof PolicyWithoutId
   */
  description?: string | null
  /**
   *
   * @type {Array<Rule>}
   * @memberof PolicyWithoutId
   */
  rules?: Array<Rule> | null
  /**
   *
   * @type {string}
   * @memberof PolicyWithoutId
   */
  createdTime?: string
}
/**
 * 返回结果统一包装
 * @export
 * @interface Response
 */
export interface Response extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof Response
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof Response
   */
  message?: string | null
}
/**
 *
 * @export
 * @interface Rule
 */
export interface Rule extends IStringIndex {
  type?: string | null
  value: any
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

/**
 *
 * @export
 * @interface StringResponse
 */
export interface StringResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof StringResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof StringResponse
   */
  message?: string | null
  /**
   *
   * @type {string}
   * @memberof StringResponse
   */
  data?: string | null
}
/**
 *
 * @export
 * @interface Tunnel
 */
export interface Tunnel extends IStringIndex {
  /**
   *
   * @type {number}
   * @memberof Tunnel
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof Tunnel
   */
  name: string | null
  /**
   *
   * @type {string}
   * @memberof Tunnel
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof Tunnel
   */
  policyId?: string | null
  /**
   *
   * @type {string}
   * @memberof Tunnel
   */
  ownerId?: string | null
  /**
   *
   * @type {string}
   * @memberof Tunnel
   */
  createdTime?: string
  /**
   *
   * @type {string}
   * @memberof Tunnel
   */
  updatedTime?: string
}
/**
 *
 * @export
 * @interface TunnelAndPolicy
 */
export interface TunnelAndPolicy extends IStringIndex {
  /**
   *
   * @type {number}
   * @memberof TunnelAndPolicy
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof TunnelAndPolicy
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof TunnelAndPolicy
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof TunnelAndPolicy
   */
  policyId?: string | null
  /**
   *
   * @type {string}
   * @memberof TunnelAndPolicy
   */
  ownerId?: string | null
  /**
   *
   * @type {string}
   * @memberof TunnelAndPolicy
   */
  createdTime?: string
  /**
   *
   * @type {string}
   * @memberof TunnelAndPolicy
   */
  updatedTime?: string
  /**
   *
   * @type {PolicyWithoutId}
   * @memberof TunnelAndPolicy
   */
  policy?: PolicyWithoutId
}
/**
 *
 * @export
 * @interface TunnelAndPolicyIEnumerableDataResponse
 */
export interface TunnelAndPolicyIEnumerableDataResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof TunnelAndPolicyIEnumerableDataResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof TunnelAndPolicyIEnumerableDataResponse
   */
  message?: string | null
  /**
   *
   * @type {Array<TunnelAndPolicy>}
   * @memberof TunnelAndPolicyIEnumerableDataResponse
   */
  data?: Array<TunnelAndPolicy> | null
}
/**
 *
 * @export
 * @interface TunnelAndPolicyIEnumerableResponse
 */
export interface TunnelAndPolicyIEnumerableResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof TunnelAndPolicyIEnumerableResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof TunnelAndPolicyIEnumerableResponse
   */
  message?: string | null
  /**
   *
   * @type {Array<TunnelAndPolicy>}
   * @memberof TunnelAndPolicyIEnumerableResponse
   */
  data?: Array<TunnelAndPolicy> | null
}
/**
 *
 * @export
 * @interface TunnelDataResponse
 */
export interface TunnelDataResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof TunnelDataResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof TunnelDataResponse
   */
  message?: string | null
  /**
   *
   * @type {Tunnel}
   * @memberof TunnelDataResponse
   */
  data?: Tunnel
}
/**
 *
 * @export
 * @interface TunnelDetailInfo
 */
export interface TunnelDetailInfo extends IStringIndex {
  /**
   *
   * @type {number}
   * @memberof TunnelDetailInfo
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof TunnelDetailInfo
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof TunnelDetailInfo
   */
  description?: string | null
  /**
   *
   * @type {Array<DataBind>}
   * @memberof TunnelDetailInfo
   */
  dataInfos?: Array<DataBind> | null
  /**
   *
   * @type {Policy}
   * @memberof TunnelDetailInfo
   */
  policy?: Policy
}

/**
 *
 * @export
 * @interface TunnelDetailInfo
 */
export interface TunnelDetailInfoResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof TunnelDataResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof TunnelDataResponse
   */
  message?: string | null
  /**
   *
   * @type {Tunnel}
   * @memberof TunnelDataResponse
   */
  data?: TunnelDetailInfo
}

/**
 *
 * @export
 * @interface TunnelIEnumerableDataResponse
 */
export interface TunnelIEnumerableDataResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof TunnelIEnumerableDataResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof TunnelIEnumerableDataResponse
   */
  message?: string | null
  /**
   *
   * @type {Array<Tunnel>}
   * @memberof TunnelIEnumerableDataResponse
   */
  data?: Array<Tunnel> | null
}
/**
 *
 * @export
 * @interface TunnelIEnumerableResponse
 */
export interface TunnelIEnumerableResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof TunnelIEnumerableResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof TunnelIEnumerableResponse
   */
  message?: string | null
  /**
   *
   * @type {Array<Tunnel>}
   * @memberof TunnelIEnumerableResponse
   */
  data?: Array<Tunnel> | null
}
/**
 *
 * @export
 * @interface TunnelMetaInfo
 */
export interface TunnelMetaInfo extends IStringIndex {
  /**
   *
   * @type {number}
   * @memberof TunnelMetaInfo
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof TunnelMetaInfo
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof TunnelMetaInfo
   */
  description?: string | null
}
/**
 *
 * @export
 * @interface TunnelResponse
 */
export interface TunnelResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof TunnelResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof TunnelResponse
   */
  message?: string | null
  /**
   *
   * @type {Tunnel}
   * @memberof TunnelResponse
   */
  data?: Tunnel[]
}
/**
 *
 * @export
 * @interface TunnelWithPolicy
 */
export interface TunnelWithPolicy extends IStringIndex {
  /**
   *
   * @type {number}
   * @memberof TunnelWithPolicy
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof TunnelWithPolicy
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof TunnelWithPolicy
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof TunnelWithPolicy
   */
  policyId?: string | null
  /**
   *
   * @type {string}
   * @memberof TunnelWithPolicy
   */
  ownerId?: string | null
  /**
   *
   * @type {string}
   * @memberof TunnelWithPolicy
   */
  createdTime?: string
  /**
   *
   * @type {string}
   * @memberof TunnelWithPolicy
   */
  updatedTime?: string
  /**
   *
   * @type {PolicyWithoutId}
   * @memberof TunnelWithPolicy
   */
  policy?: PolicyWithoutId
}
/**
 *
 * @export
 * @interface TunnelWithPolicyIEnumerableDataResponse
 */
export interface TunnelWithPolicyIEnumerableDataResponse extends IStringIndex {
  /**
   *
   * @type {StatusCode}
   * @memberof TunnelWithPolicyIEnumerableDataResponse
   */
  status?: StatusCode
  /**
   * 业务响应消息
   * @type {string}
   * @memberof TunnelWithPolicyIEnumerableDataResponse
   */
  message?: string | null
  /**
   *
   * @type {Array<TunnelWithPolicy>}
   * @memberof TunnelWithPolicyIEnumerableDataResponse
   */
  data?: Array<TunnelWithPolicy> | null
}
/**
 *
 * @export
 * @interface UpdateTunnelRequest
 */
export interface UpdateTunnelRequest extends IStringIndex {
  /**
   *
   * @type {number}
   * @memberof UpdateTunnelRequest
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof UpdateTunnelRequest
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof UpdateTunnelRequest
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof UpdateTunnelRequest
   */
  policyId?: string | null
}


