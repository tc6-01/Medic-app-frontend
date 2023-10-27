// ** MUI Imports

// ** Demo Components Imports
import { Provider } from 'reto';
import RegisterWindow from 'src/components/common/RegisterWindow';
import { RegisterWindowStore } from '../../../states/page/user/register/index';

const RegisterPage = () => {
  return (
    <Provider of={RegisterWindowStore} memo>
      <RegisterWindow />
    </Provider>
  )
}

export default RegisterPage
