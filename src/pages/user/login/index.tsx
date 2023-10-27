// ** MUI Imports

// ** Demo Components Imports
import { Provider } from 'reto'
import LoginPageWrapper from '../../../components/user/login'
import { LoginPageStore } from '../../../states/page/user/login/index'

const LoginPage = () => {
  return (
    <Provider of={LoginPageStore} memo>
      <LoginPageWrapper />
    </Provider>
  )
}

export default LoginPage
