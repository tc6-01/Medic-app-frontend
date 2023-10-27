import axios from 'axios'
import Toast from 'src/components/common/Toast'
import { DeviceMetaDataResponse, Response, UserDataResponse } from './models'
const uploadData = async (tunnelId: string, dataName: string, file: any): Promise<Response> => {
  const res = await axios.post(`/api/data?tunnelId=${tunnelId}&dataName=${dataName}`, file, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  })
  return res.data
}
const deleteData = async (id: string): Promise<Response> => {
  const res = await axios.delete(`/api/data?objectId=${id}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  })
  return res.data
}

const getMetaDatas = async (): Promise<DeviceMetaDataResponse> => {
  const res = await axios.get('/api/data/metadata', {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  })
  return res.data
}

const getDatas = async (): Promise<UserDataResponse> => {
  const res = await axios.get('/api/Data/Owned', {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  })
  return res.data
}

//下载数据
const downloadFile = (url: string, objectId: string, md5: string) => {
  axios
    .get(`/api/Data?url=${url}&objectId=${objectId}&md5=${md5}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + localStorage.getItem('token') //请求的数据类型为form data格式
      },
      responseType: 'blob' //设置响应的数据类型为一个包含二进制数据的 Blob 对象，必须设置！！！
    })
    .then(function (response) {
      let filename = response.headers['content-disposition'].split(';')[1].split('=')[1]
      const blob = new Blob([response.data])
      const fileName = filename
      const linkNode = document.createElement('a')
      linkNode.download = fileName //a标签的download属性规定下载文件的名称
      linkNode.style.display = 'none'
      linkNode.href = URL.createObjectURL(blob) //生成一个Blob URL
      document.body.appendChild(linkNode)
      linkNode.click() //模拟在按钮上的一次鼠标单击
      URL.revokeObjectURL(linkNode.href) // 释放URL 对象
      document.body.removeChild(linkNode)
      Toast.success('已开始下载')
    })
    .catch(function (error) {
      console.log(error)
      Toast.error('下载错误')
    })
}
export { uploadData, deleteData, getDatas, getMetaDatas, downloadFile }
