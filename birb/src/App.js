import './App.css';
//import Dropzone from './Components/image-upload';
//import axios from 'axios';
import React from 'react';
//import { useState } from 'react';
import './App.css';
//import TextField from '@mui/material/TextField';
import {Paper} from '@mui/material';// Material UI
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Previews from './Components/previewImgUpload';
import StyledDropzone from './Components/styledImgUpload';


const theme = createTheme({
  typography: {
    fontFamily: 'Fauna One',
    }
  });


function App() {
//const [userInput, setUserInput] = useState("");
//const [zeldaItemInfo, setZeldaItemInfo] = useState<undefined | any>(undefined);

//const HYRULE_COMPENDIUM_API = "https://botw-compendium.herokuapp.com/api/v2/entry/";
return (
  <ThemeProvider theme={theme}>
  <div>
    <div> 
      <h1 style={{ display: "flex", justifyContent: "center" }}>Birb or not birb</h1>
      <div className="center">
        <label>Are birbs real?</label>
        <br/>
        <br/>
        <StyledDropzone />
      <Paper elevation={3} className="MuiPaper-rounded" style={{display: 'inline-block', padding: '12px'}} >
      </Paper>
      </div>
    </div>
    <br/>
  </div>
  </ThemeProvider>
);
}

export default App;
