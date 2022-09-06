import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logo from "../Asset/PGI_LOGO.png";
import { Settings } from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border : '1px solid grey',
  borderRadius: 50,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  color : "grey",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(8),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '35ch',
    },
  },
}));
const styleAppBar = {
  boxShadow : "none",
  background : "white",
  borderBottom : "1px solid black"
}
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={styleAppBar}>
        <Toolbar>
          {/* Logo Here */}
          <img src={Logo} alt="" style={{width:"8rem", marginRight:20, marginLeft :20}} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1}} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
            <IconButton
              size="large"
              sx={{
                color : "grey"
              }}
            >
                <NotificationsIcon />
            </IconButton>
            <IconButton size="large" sx={{
                color : "grey"
              }}>
                <MailIcon />
            </IconButton>
            <IconButton
              sx={{
                color : "grey"
              }}
              size="large"
              edge="end"
            >
              <Settings/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              sx={{
                color : "grey"
              }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
