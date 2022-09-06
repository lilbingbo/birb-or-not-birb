import './App.css';
//import Dropzone from './Components/image-upload';
//import axios from 'axios';
import React from 'react';
//import { useState } from 'react';
import './App.css';
//import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Previews from './Components/previewImgUpload';
import StyledDropzone from './Components/styledImgUpload';
import BirbResponse from './Components/birbResponse';

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
        <label>Upload an image and we'll tell you if it's a birb.</label>
        <br/>
        <br/>
        <StyledDropzone />
        <br></br>
        <br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <BirbResponse/>
  </div>
      </div>
    </div>
    <br/>
  </div>
  </ThemeProvider>
);
}

export default App;
