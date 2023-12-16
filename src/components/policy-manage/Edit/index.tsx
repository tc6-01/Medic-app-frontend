import { Button, Grid, Stack, Fade } from '@mui/material';
import { useStore } from 'reto'
// import { createData } from 'src/service/Data';
import { CreateProps, PolicyEditorProps } from 'src/types/ComponentProps'
import Toast from '../../common/Toast'

import { addPolicy } from 'src/service/policyApi'
import { CreatePolicyPageStore } from 'src/states/page/policy-manage/CreatePolicyPageStore'
import PolicyEditor from '../../file-share/PolicyEditor'
import { useLocation, useNavigate } from 'react-router'
import { getUserList, shareFile } from 'src/service/medic';
import { useState, useEffect } from 'react';
import { RoleSelectData } from 'src/types/models/DataModels';



const PolicyManageCreateWrapper = ({ }: CreateProps) => {
  const states = useStore(CreatePolicyPageStore)
  const navi = useNavigate()
  const location = useLocation();
  const filename = (location.state as { id: string }).id;
  const [roles, setRoles] = useState<Array<RoleSelectData>>([])
  useEffect(() => {
    getUserList().then(res => {
      if (res && res.code === 0) {
        if (Array.isArray(res.data)) {
          setRoles(res.data.map((item, idx) => { return { id: idx.toString(), name: item } }))
        }
      } else {
        Toast.error('获取用户列表失败')
      }
    })
    states.setTo(new Date())
  }, [])
  console.log(states.role)
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
      case 'role':
        states.setRole(e.target.value)
        break
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
          id: 'des',
          name: '策略描述',
          placeHolder: '请输入共享描述',
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
              checked: states.countDisplay,
              onChange: (e: any) => {
                states.setCountDisplay(e.target.checked)
              }
            },
            {
              name: '限制使用时间',
              enabled: true,
              checked: states.timeDisplay,
              onChange: (e: any) => {
                states.setTimeDisplay(e.target.checked)
              }
            },
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
          options: roles,
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
        display: states.timeDisplay,
        value: {
          id: 'to',
          value: states.to,
          title: '共享结束时间',
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


  //创建数据通道请求
  const onSubmit = () => {
    if (states.des.length == 0) {
      Toast.warning('描述不能为空！')
      return
    }

    let rules = []
    states.userId.length !== 0 && states.userIdDisplay
      ? rules.push({
        type: 'user',
        value: states.userId
      })
      : ''
    states.url.length !== 0 && states.urlDisplay
      ? rules.push({
        type: 'target',
        value: states.url
      })
      : ''
    states.count !== 0 && states.countDisplay
      ? rules.push({
        type: 'count',
        value: states.count
      })
      : ''
    states.period.length !== 0 && states.peroidDisplay
      ? rules.push({
        type: 'peroid',
        value: states.period
      })
      : ''
    states.from != null && states.timeDisplay
      ? rules.push({
        type: 'useTime',
        value: {
          from: states.from.getTime(), //时间戳
          to: states.to.getTime(),
          delete: states.checked //到时间是否删除
        }
      })
      : ''
    states.role.length !== 0 && states.roleDisplay
      ? rules.push({
        type: 'role',
        value: states.role
      })
      : ''

    shareFile({
      fileName: filename,
      target: roles[states.role].name,
      expire: states.to.getTime(),
      useLimit: states.count,
      isGroup: true
    })
      .then(res => {
        if (res.code == 0) {
          Toast.success('添加成功')
          navi('/filemanage')
        } else {
          Toast.error('请求失败' + res.message)
        }
      })
      .catch(error => {
        Toast.error('错误' + error)
      })
  }

  return (
    <Fade in={true}>
      <Stack mt={2} mb={2} spacing={4}>
        <PolicyEditor items={props.items} />
        <Button fullWidth variant='contained' sx={{ minHeight: 50 }} onClick={onSubmit} >
          确认添加
        </Button>
      </Stack>
    </Fade>
  )
}

export default PolicyManageCreateWrapper
