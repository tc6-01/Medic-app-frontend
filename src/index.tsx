import axios from 'axios';
import 'nprogress/nprogress.css';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'reto';
import { SideBarStore } from 'src/states/global/SideBarStore';
import { SnackBarStore } from 'src/states/global/TopSnackBarStore';
import App from './App';
import { BottomDrawerStore } from './states/global/BottomDrawerStore';
import { LoadingStore } from './states/common/LoadingStore';
import { ConfirmDeleteDialogStore } from './states/common/ConfirmDeleteDialogStore';
import { HeaderStore } from './states/global/HeaderStore';
import { CreatePolicyPageStore } from './states/page/policy-manage/CreatePolicyPageStore';
axios.defaults.baseURL = 'http://127.0.0.1:8080';
// axios.defaults.baseURL = 'http://127.0.0.1:8080';
// 创建一个请求拦截器函数
function interceptor(config) {
  // 获取请求的数据
  console.log('请求拦截器：', config);
  return config;
 }
 
 // 添加请求拦截器
 axios.interceptors.request.use(interceptor);
 // 创建响应拦截器
 function responseInterceptor(response) {
   console.log('响应拦截器：', response);
   return response;
 }
 // 添加响应拦截器
 axios.interceptors.response.use(responseInterceptor);
const root = document.getElementById('root')
const render = createRoot(root)
render.render(
  <HelmetProvider>
    <Provider of={SideBarStore}>
      <Provider of={SnackBarStore}>
        <Provider of={BottomDrawerStore}>
          <Provider of={LoadingStore}>
            <Provider of={ConfirmDeleteDialogStore}>
              <Provider of={HeaderStore} memo>
                <Provider of={CreatePolicyPageStore} memo>
                  <Router>
                    <App />
                  </Router>
                </Provider>
              </Provider>
            </Provider>
          </Provider>
        </Provider>
      </Provider>
    </Provider>
  </HelmetProvider>,
);
