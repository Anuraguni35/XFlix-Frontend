import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import "./Upload.css"
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import {useState} from "react"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
// import axios from "axios"
import { useSnackbar } from "notistack";
// import config from "../App"
 
 

 
 
export default function Upload({openUpload,setOpenUpload}) {
  const { enqueueSnackbar } = useSnackbar();
  const [formDetails,setformDetails]=useState({
    "videoLink":"","imageLink":"","title":"","genre":"","age":"" 
  })
  const [date, setdate] = React.useState(dayjs('2022-04-17'));

  const PostVideo=()=>{
    // let obj=formDetails;
    // let req=await axios.post(`${config.endpoint}`,[obj]); 
    // console.log(req);
    setOpenUpload(false)
    enqueueSnackbar("Uploaded Video Successfully",{variant:"success"})
  }
  return (
    
    <div  className='upload'> 
    <Dialog open={openUpload}  className="UploadContainer" >
      <DialogTitle className="uploadbgcolor uploadTitle" ><span style={{fontSize:"2.5vh",color:"white"}}> Upload Videos </span><button className="uploadbgcolor" style={{border:"none"}} onClick={()=>setOpenUpload(false)}><CloseIcon  style={{fontSize:"3vh",color:"white",cursor:"pointer"}}/></button></DialogTitle>
      <DialogContent className="uploadbgcolor" sx={{paddingRight:2,paddingLeft:2,paddingTop:4}} > 
      <TextField
      fullWidth
         InputLabelProps={{className:"inputColor"}}
         InputProps={{className:"inputBoxColor"}}
         sx={{marginTop:1,textColor:"white"}}
         size="small"
          id="outlined-multiline-flexible"
          label="Video Link"
          multiline
          maxRows={4}
          helperText="This link will be used to derive the video"
        />
        <TextField
        InputLabelProps={{className:"inputColor"}}
        fullWidth
        sx={{marginTop:1}}
          id="outlined-multiline-flexible"
          label="Thumbnail Image Link"
          multiline
          maxRows={4}
          helperText="This link will be used to preview the thumbnail image"
          size="small"
        />
        <TextField
        InputLabelProps={{className:"inputColor"}}
        fullWidth
        sx={{marginTop:1}}
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          maxRows={4}
          helperText="The title will be the representative text for video"
          size="small"
        />
        <FormControl fullWidth sx={{marginTop:1}} size="small" >
           <InputLabel id="demo-simple-select-label" className="inputColor">Genre</InputLabel>
             <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formDetails.genre}
                label="Genre"
                onChange={(e)=>{setformDetails({...formDetails,genre:e.target.value})}} >
                <MenuItem value={"Education"}>Education</MenuItem>
                <MenuItem value={"Sports"}>Sports</MenuItem>
                <MenuItem value={"Comedy"}>Comedy</MenuItem>
                <MenuItem value={"LifeStyle"}>LifeStyle</MenuItem>
              </Select>
              <FormHelperText>Genre will help in categorizing your videos</FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{marginTop:1}} size="small"   >
           <InputLabel id="demo-simple-select-label" className="inputColor">Suitable age group for the clip</InputLabel>
             <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formDetails.age}
                label="Suitable age group for the clip"
                onChange={(e)=>{setformDetails({...formDetails,age:e.target.value})}} >
                <MenuItem value={"7+"}>7+</MenuItem>
                <MenuItem value={"12+"}>12+</MenuItem>
                <MenuItem value={"16+"}>16+</MenuItem>
                <MenuItem value={"18+"}>18+</MenuItem>
              </Select>
              <FormHelperText>This will be used to filter videos on age group suitability</FormHelperText>
          </FormControl>
          <LocalizationProvider size="small" dateAdapter={AdapterDayjs}InputLabelProps={{className:"inputColor"}}>
              <DemoContainer size="small" sx={{marginTop:1   }}components={['DatePicker']}InputLabelProps={{className:"inputColor"}}>
                 <DatePicker InputLabelProps={{className:"inputColor"}} sx={{width:500}} size="small"label="Release date"
                 value={date}
                 onChange={(newValue) => setdate(newValue)} 
                 slotProps={{
                  textField: {
                    helperText: "This will be used to sort videos",
                  },
                }}/>
               </DemoContainer>
          </LocalizationProvider>
      </DialogContent>
      <DialogActions  className="uploadbgcolor Actioncontainer">
        <button id="upload-btn-submit" type="Submit"className="uploadbtnRed" onClick={()=>{PostVideo()}}>UPLOAD VIDEOS</button>
        <button id="upload-btn-cancel" className="cancelbtn" onClick={()=>setOpenUpload(false)}>CANCEL</button>
      </DialogActions>
    </Dialog>
     </div>
     
  )
}
 