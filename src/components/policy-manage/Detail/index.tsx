import { Button, Grid, Stack } from '@mui/material'
import { useStore } from 'reto'
// import { createData } from 'src/service/Data';
import { CreateProps, PolicyEditorProps } from 'src/types/ComponentProps'
import Toast from '../../common/Toast'

import { addPolicy } from 'src/service/policyApi'
import { CreatePolicyPageStore } from 'src/states/page/policy-manage/CreatePolicyPageStore'
import PolicyEditor from '../../file-share/PolicyEditor'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { getUserList } from 'src/service/medic'
import { RoleSelectData } from 'src/types/models/DataModels'

const PolicyManageDetailWrapper = ({ }: CreateProps) => {
  const states = useStore(CreatePolicyPageStore)
  const navi = useNavigate()


  const onChange = (e: any) => {
    switch (e.target.id) {
      case 'policyName':
        states.setPolicyName(e.target.value)
        break
      case 'des':
        states.setDes(e.target.value)
        break
      case 'userId':
        // 两种字符分割
        let userIdArray = e.target.value.split(/[；;]/)
        states.setUserId(userIdArray)
        break
      case 'url':
        let urlArray = e.target.value.split(/[；;]/)
        states.setUrl(urlArray)
        break
      case 'count':
        states.setCount(parseInt(e.target.value))
        break
      case 'period':
        states.setPeriod(e.target.value)
        break
      //id 没赋值进去直接传
      //   case 'role':
      //     console.log('asdas')
      //     console.log(e.target)
      //     states.setRole(e.target.value)
      //     break
      //id 没赋值进去直接传
      //   case 'delete':
      //     break
      default:
        break
    }
  }


  const props: PolicyEditorProps = {
    items: [
      {
        type: 'text',
        display: true,
        value: {
          id: 'policyName',
          name: '策略名称',
          placeHolder: '请输入策略名称',
          onChange: onChange
        }
      },
      {
        type: 'text',
        display: true,
        value: {
          id: 'des',
          name: '策略描述',
          placeHolder: '请输入策略描述',
          onChange: onChange
        }
      },
      {
        type: 'title'
      },

      {
        type: 'control',
        value: {
          items: [
            {
              name: '限制访问账号',
              enabled: true,
              checked: states.roleDisplay,
              onChange: (e: any) => {
                states.setRoleDisplay(e.target.checked)
              }
            },
            {
              name: '限制使用次数',
              enabled: true,
              checked: states.userIdDisplay,
              onChange: (e: any) => {
                states.setUserIdDisplay(e.target.checked)
              }
            },
            {
              name: '设备URL',
              enabled: true,
              checked: states.urlDisplay,
              onChange: (e: any) => {
                states.setUrlDisplay(e.target.checked)
              }
            },
            {
              name: '可访问次数',
              enabled: true,
              checked: states.countDisplay,
              onChange: (e: any) => {
                states.setCountDisplay(e.target.checked)
              }
            },
            {
              name: '可访问的频率(次/秒)',
              enabled: true,
              checked: states.peroidDisplay,
              onChange: (e: any) => {
                states.setPeroidDisplay(e.target.checked)
              }
            },

            // {
            //   name: '可访问的属性',
            //   enabled: true,
            //   checked:states.userIdDisplay
            // },
            {
              name: '限制访问时间段',
              enabled: true,
              checked: states.timeDisplay,
              onChange: (e: any) => {
                states.setTimeDisplay(e.target.checked)
              }
            }
          ]
        }
      },

      {
        type: 'select',
        display: states.roleDisplay,
        value: {
          id: 'role',
          defaultValue: '',
          name: '用户角色',
          placeHolder: '请选择用户角色',
          options: [],
          onChange: (e: any) => {
            states.setRole(e.target.value)
          }
        }
      },
      {
        type: 'text',
        display: states.userIdDisplay,
        value: {
          id: 'userId',
          name: '使用用户id',
          placeHolder: '请输入使用用户id，多个id用英文分号;分割',
          onChange: onChange
        }
      },
      {
        type: 'text',
        display: states.urlDisplay,
        value: {
          id: 'url',
          name: '设备url',
          placeHolder: '请输入设备url，多个设备url用英文分号;分割',
          onChange: onChange
        }
      },
      {
        type: 'text',
        display: states.countDisplay,
        value: {
          id: 'count',
          name: '用户可访问次数',
          placeHolder: '请输入用户可访问次数',
          onChange: onChange
        }
      },
      {
        type: 'text',
        display: states.peroidDisplay,
        value: {
          id: 'period',
          name: '用户可访问的频率(次/秒)',
          placeHolder: '请输入用户可访问的频率(次/秒)',
          onChange: onChange
        }
      },
      {
        type: 'time',
        display: false,
        value: {
          id: 'from',
          value: states.from,
          title: '开始时间',
          onChange: (newValue: any) => {
            states.setFrom(newValue)
          }
        }
      },
      {
        type: 'time',
        display: states.timeDisplay,
        value: {
          id: 'to',
          value: states.to,
          title: '结束时间',
          onChange: (newValue: any) => {
            states.setTo(newValue)
          }
        }
      },
      {
        type: 'switch',
        display: states.timeDisplay,
        value: {
          id: 'delete',
          checked: states.checked,
          name: '到时间是否删除',
          enabled: true,
          onChange: (e: any) => {
            states.setCheacked(e.target.checked)
          }
        }
      }
    ]
  }

  //取消弹框
  const handleCancel = () => {
    //dialogStates.setEditorDialogOpen(false)
  }

  //创建数据通道请求
  const onSubmit = () => {
    if (states.policyName.length == 0 || states.des.length == 0) {
      Toast.warning('策略名称和策略描述不能为空！')
      return
    }

    // let rules = []
    // states.userId.length !== 0 && states.userIdDisplay
    //   ? rules.push({
    //     type: 'user',
    //     value: states.userId
    //   })
    //   : ''
    // states.url.length !== 0 && states.urlDisplay
    //   ? rules.push({
    //     type: 'target',
    //     value: states.url
    //   })
    //   : ''
    // states.count.length !== 0 && states.countDisplay
    //   ? rules.push({
    //     type: 'count',
    //     value: states.count
    //   })
    //   : ''
    // states.period.length !== 0 && states.peroidDisplay
    //   ? rules.push({
    //     type: 'peroid',
    //     value: states.period
    //   })
    //   : ''
    // states.from != null && states.timeDisplay
    //   ? rules.push({
    //     type: 'useTime',
    //     value: {
    //       from: states.from.getTime(), //时间戳
    //       to: states.to.getTime(),
    //       delete: states.checked //到时间是否删除
    //     }
    //   })
    //   : ''
    // states.role.length !== 0 && states.roleDisplay
    //   ? rules.push({
    //     type: 'role',
    //     value: states.role
    //   })
    //   : ''

    // let data = {
    //   name: states.policyName,
    //   description: states.des,
    //   rules: rules
    // }

    // addPolicy(data)
    //   .then(res => {
    //     if (res.status == 0) {
    //       Toast.success('添加成功')
    //       navi('/policymanage/show')
    //       //getAll()
    //       //dialogStates.setEditorDialogOpen(false)
    //     } else {
    //       Toast.error('请求失败')
    //     }
    //   })
    //   .catch(error => {
    //     Toast.error('请求错误')
    //   })
  }

  return (
    <Stack mt={2} mb={2} spacing={4}>
      <PolicyEditor items={props.items} />
      <Button fullWidth variant='contained' sx={{ minHeight: 50 }} onClick={onSubmit} >
        确认添加
      </Button>
    </Stack>
  )
}

export default PolicyManageDetailWrapper
