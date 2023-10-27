
import {
  alpha, Box, Divider, lighten, Stack, styled, Typography, useTheme
} from '@mui/material';

import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        
        color: ${theme.header.textColor};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background, 0.95)};
        backdrop-filter: blur(3px);
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`
);

function Header(props: { title: string }) {
  const theme = useTheme();

  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        height: 60,
        minHeight: 60,
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
              lighten(theme.colors.primary.main, 0.7),
              0.15
            )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
              theme.colors.alpha.black[100],
              0.2
            )}, 0px 5px 22px -4px ${alpha(
              theme.colors.alpha.black[100],
              0.1
            )}`
      }}
    >
      <Stack
        direction="row"
        // divider={<Divider orientation="vertical" />}
        alignItems="center"
        spacing={2}
      >
        <Typography ml={5} color={theme.colors.secondary.main} variant="h3">{props.title}</Typography>
      </Stack>
      <HeaderUserbox />
      {/* <Box display="flex" alignItems="center">
        <HeaderButtons />
        
      </Box> */}
    </HeaderWrapper>
  );
}

export default Header;
