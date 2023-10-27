import { makeStyles } from '@material-ui/core';
import { Group, GroupOutlined, PersonOutline } from '@material-ui/icons';
import { BottomNavigation, BottomNavigationAction, Container, Stack, Zoom } from '@mui/material';
import { BookOutline, FolderOpenOutline, ShareOutline } from 'mdi-material-ui';
import { FC, ReactNode, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import './style.css';
interface MobileMenuBarLayoutProps {
  children?: ReactNode;
}
const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: 60,
    // position: "fixed",
    borderTop: '1px solid grey',
    // bottom: 0,
    // marginTop: 5,
    "& .MuiBottomNavigationAction-root": {
      "@media (max-width: 768px)": {
        minWidth: "auto",
        //padding: "6px 0",
      },
      maxWidth: 600,
      fontWeight: 'bold',
    }
  }
});

interface MenuItemProps {
  label: string;
  icon: ReactNode;
  path: string;
  show: boolean;
}

const menus: MenuItemProps[] = [
  {
    label: '文件总览',
    icon: <FolderOpenOutline />,
    path: '/filemanage',
    show: true
  },
  {
    label: '共享管理',
    icon: <ShareOutline />,
    path: '/fileshare',
    show: true
  },
  // {
  //   label: '群组管理',
  //   icon: <GroupOutlined />,
  //   path: '/groupmanage',
  //   show: true
  // },
  {
    label: '新建共享',
    icon: <BookOutline />,
    path: '/policymanage/create',
    show: false
  },
  {
    label: '我',
    icon: <PersonOutline />,
    path: '/me',
    show: true
  }
]

const MobileMenuBarLayout: FC<MobileMenuBarLayoutProps> = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const localtion = useLocation();
  const navigator = useNavigate()
  return (
    <Stack overflow={'hidden'} height={'100%'}>
      <Header title={menus.find((item) => localtion.pathname.startsWith(item.path)).label} />

      <Container maxWidth="lg" sx={{ overflow: 'scroll', '::-webkit-scrollbar': { display: 'none' }, flexGrow: 1 }}>
        <Outlet />
      </Container>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
        {
          menus.filter((item) => item.show).map((item, index) => {
            return <BottomNavigationAction key={index} onClick={() => { navigator(item.path) }} label={item.label} icon={item.icon} />
          })
        }
      </BottomNavigation>
    </Stack>
  );
};

export default MobileMenuBarLayout;

