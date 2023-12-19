import SuspenseLoader from 'src/components/common/SuspenseLoader';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
import BlankLayout from './layouts/BlankLayout/index';
import { checkAuthAndTokenRefreshTime } from './utils/checkAuth';
import MobileMenuBarLayout from './layouts/MobileMenuBarLayout';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

function RequireAuth({ children }) {
  const authed = checkAuthAndTokenRefreshTime()
  return authed === true ? ( // 判断 localstorage 中登录状态是否为 true
    children
  ) : (
    <Navigate to="/user/login" replace /> // 跳转到登录
  );
}

const MenuBarAfterAuth = (props: { isMobile: boolean }) => <RequireAuth>{props.isMobile ? <MobileMenuBarLayout /> : <SidebarLayout />}</RequireAuth>


// 文件管理及其子页面
const FileManageLazy = Loader(lazy(() => import('src/pages/file-manage')));
const FileManageCreateLazy = Loader(lazy(() => import('src/pages/file-manage/create')));
// 文件共享及其子页面
const FileShareLazy = Loader(lazy(() => import('src/pages/file-share')));
const FileSharedByMeLazy = Loader(lazy(() => import('src/pages/file-share/SharedByMe')));
const FileSharedToMeLazy = Loader(lazy(() => import('src/pages/file-share/SharedToMe')));
const SharingDetailsLazy = Loader(lazy(() => import('src/pages/file-share/Details')));
// 我及其子页面
const MeLazy = Loader(lazy(() => import('src/pages/me')));
// 群组管理及其子页面
const GroupManageLazy = Loader(lazy(() => import('src/pages/group-manage')));
// 策略管理及其子页面
const PolicyManageLazy = Loader(lazy(() => import('src/pages/policy-manage')));
const PolicyEditLazy = Loader(lazy(() => import('src/pages/policy-manage/create')));
// 登录注册页面
const LoginLazy = Loader(lazy(() => import('src/pages/user/login')));
const RegisterLazy = Loader(lazy(() => import('src/pages/user/register')));
// 文件预览及其子页面
const PdfPreviewLazy = Loader(lazy(() => import('src/pages/pdf-preview')));
const FileUploadLazy = Loader(lazy(() => import('src/pages/file-upload')));


// Status
const Status404 = Loader(
  lazy(() => import('src/components/common/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/components/common/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/components/common/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/components/common/Status/Maintenance'))
);



function createRoutes(isMobile: boolean): RouteObject[] {
  return [
    {
      path: '',
      element: <Navigate to="/filemanage" replace />,
    },
    {
      path: '/filemanage',
      element: <MenuBarAfterAuth isMobile={isMobile} />,
      children: [
        {
          path: '',
          element: <FileManageLazy />
        },
        {
          path: 'create',
          element: <FileManageCreateLazy />
        }
      ]
    },
    {
      path: '/fileshare',
      element: <MenuBarAfterAuth isMobile={isMobile} />,
      children: [
        {
          path: '',
          element: <FileShareLazy />
        },
        {
          path: 'sharedbyme',
          element: <FileSharedByMeLazy />
        },
        {
          path: 'sharedtome',
          element: <FileSharedToMeLazy />
        },
        {
          path: 'details',
          element:<SharingDetailsLazy/>
        }
      ]
    },
    
    {
      path: '/groupmanage',
      element: <MenuBarAfterAuth isMobile={isMobile} />,
      children: [
        {
          path: '',
          element: <GroupManageLazy />
        },
        {
          path: 'trace',
          element: <GroupManageLazy />
        }
      ]
    },
    {
      path: '/policymanage',
      element: <MenuBarAfterAuth isMobile={isMobile} />,
      children: [
        {
          path: 'create',
          element: <PolicyEditLazy />
        },
        {
          path: 'show',
          element: <PolicyManageLazy />
        }
      ]
    },
    {
      path: '/me',
      element: <MenuBarAfterAuth isMobile={isMobile} />,
      children: [
        {
          path: '',
          element: <MeLazy />
        },
        {
          path: 'query',
          element: <MeLazy />
        }
      ]
    },
    {
      path: 'error',
      children: [
        {
          path: '',
          element: <Navigate to="404" replace />
        },
        {
          path: '404',
          element: <Status404 />
        },
        {
          path: '500',
          element: <Status500 />
        },
        {
          path: 'maintenance',
          element: <StatusMaintenance />
        },
        {
          path: 'coming-soon',
          element: <StatusComingSoon />
        },
      ]
    },
    {
      path: '/user',
      element: <BlankLayout />,
      children: [
        {
          path: 'login',
          element: <LoginLazy />
        },
        {
          path: 'register',
          element: <RegisterLazy />
        }
      ]
    },
    {
      path: 'pdfpreview',
      element: <BlankLayout />,
      children: [
        {
          path: '',
          element: <PdfPreviewLazy />
        },
      ]
    },
    {
      path: '/file',
      element:<BlankLayout/>,
      children:[
        {
          path:'upload',
          element:<FileUploadLazy/>
        }
      ]
    },
    {
      path: '*',
      element: <Status404 />
    }
  ];
}


export default createRoutes;
