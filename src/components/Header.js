import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GamesIcon from '@mui/icons-material/Games';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import logo from "../images/rento.png"

const logostyle = {
 width:"250px"

}

export default function Header() {
  const [light, setLight] = useState(true);
  return (
    <div>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        p: 1,
        m: 1,
        bgcolor: '#43bcf0',
        borderRadius: 1,
      }}>
        <AppBar position="static">
          <Toolbar sx={{ bgcolor: "black" }}>
         
           <img style={logostyle} src={logo}/>
          </Toolbar>
        </AppBar>
      </Box>
      
    </div>
  );
}
