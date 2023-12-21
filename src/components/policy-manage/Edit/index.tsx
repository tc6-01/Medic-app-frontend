import { Button, Grid, Stack, Fade } from '@mui/material';
import { useStore } from 'reto'
// import { createData } from 'src/service/Data';
import { CreateProps, FileItemData, PolicyEditorProps } from 'src/types/ComponentProps'
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
  const file = (location.state as FileItemData);
  const [roles, setRoles] = useState<Array<RoleSelectData>>([])
  useEffect(() => {
    getUserList().then(res => {
      if (res && res.code === 200) {
        if (Array.isArray(res.data)) {
          setRoles(res.data.map((item, idx) => { return { id: idx.toString(), name: item } }))
        }
      } else {
        Toast.error('获取用户列表失败')
      }
    })
    states.setTo(new Date())
  }, [])
  const onChange = (e: any) => {
    // 绑定输入值（时间忽略）
    switch (e.target.id) {
      case 'policyName':
        states.setPolicyName(e.target.value)
        break
      case 'des':
        states.setDes(e.target.value)
        break
      case 'count':
        states.setCount(parseInt(e.target.value))
        break
      case 'role':
        states.setRole(e.target.value)
        break
      case 'allow':
        states.setAllow(parseInt(e.target.value))
        break
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
          defaultValue:states.policyName,
          placeHolder: '请输入共享策略名称',
          onChange: onChange
        }
      },
      {
        type: 'text',
        display: true,
        value: {
          id: 'des',
          name: '策略描述',
          defaultValue:states.des,
          placeHolder: '请输入共享描述',
          onChange: onChange
        }
      },
      {
        type:"title"
      },
      // 可控制显示
      {
        type: 'control',
        value: {
          items: [
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
            {
              name:'限制后续传播共享',
              enabled:true,
              checked: states.allowDisplay,
              onChange: (e: any) => {
                states.setAllowDisplay(e.target.checked)
              }
            }
          ]
        }
      },

      {
        type: 'select',
        display:true,
        value: {
          id: 'role',
          name: '共享至',
          placeHolder: '请选择共享用户',
          defaultValue:states.role,
          options: roles,
          onChange: (e: any) => {
            states.setRole(e.target.value)
          }
        }
      },
      {
        type: 'text',
        display: states.countDisplay,
        value: {
          id: 'count',
          name: '用户可访问次数',
          defaultValue:states.count.toString(),
          placeHolder: '请输入用户可访问次数',
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
          defaultValue:states.to.toString(),
          onChange: (newValue: any) => {
            states.setTo(newValue)
          }
        }
      },
      {
        type: 'text',
        display: states.allowDisplay,
        value: {
          id: 'allow',
          name: '用户是否可以共享',
          defaultValue:states.isAllow.toString(),
          placeHolder: '如果赋予权限请填1，否则为0',
          onChange: onChange
        }
      }
     
      // 默认使用到时删除
      // {
      //   type: 'switch',
      //   display: states.timeDisplay,
      //   value: {
      //     id: 'delete',
      //     checked: states.checked,
      //     name: '到时间是否删除',
      //     enabled: true,
      //     onChange: (e: any) => {
      //       states.setCheacked(e.target.checked)
      //     }
      //   }
      // }
    ]
  }


  //创建数据通道请求
  const onSubmit = () => {
    if(states.policyName.length == 0){
      Toast.warning("策略名不能为空")
      return
    }
    if (states.des.length == 0) {
      Toast.warning('描述不能为空！')
      return
    }
    if(states.role.length == 0){
      Toast.warning("共享目标用户不能为空")
    }
    if(states.to.getTime() > file.expire ){
      Toast.warning('共享结束时间不能超过病历过期时间！')
      return
    }
    if(states.count > (file.useLimit - file.use)){
      Toast.warning('病历可访问次数共享次数不能超过剩余次数！')
      return
    }
    console.log(file)
    shareFile({
      fileName: file.fileName,
      target: roles[states.role].name,
      expire: states.to.getTime(),
      useLimit: states.count,
      name: states.policyName,
      desc: states.des,
      isAllow:states.isAllow,
      state:file.state,
    })
      .then(res => {
        if (res.code == 200) {
          Toast.success('病历共享成功')
          navi('/filemanage')
        } else {
          console.log(res)
          Toast.error('请求失败 ' + res.msg)
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
