import logo from './logo.svg';
import './App.css';
import SideBar from "./UI/SideBar/SideBar";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Congress App
                </Typography>
            </Toolbar>
        </AppBar>
      <SideBar/>
    </div>
  );
}

export default App;
