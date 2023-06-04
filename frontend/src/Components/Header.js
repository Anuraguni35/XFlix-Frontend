import { Box, Button, Stack } from "@mui/material"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import "./header.css"
import { Link } from "react-router-dom";
import Upload from "./Upload.js"; 
import {useState} from "react"
const Header=(  {children,showupload})=>{
   const [showUpload,setshowUpload]=useState( false );
 
    return(
        <>
       <Stack direction="row" className="header"  spacing={47}>
       <Box className="Logo">
        <div sx={{width:20}}>
          <Link className="link"to="/">
          <span className="LogoX" >X</span><span className="LogoF" sx={{color:"#E1E4E8"}}>Flix</span> 
          </Link>  
        </div>
        </Box>
        {children}
       {showupload===true&&<Button id="upload-btn" variant="contained" sx={{height:40}} className="uploadbtn" onClick={()=>(setshowUpload(true))} ><FileUploadIcon/>upload</Button>}
        
       </Stack>
       { <Upload openUpload={showUpload} setOpenUpload={setshowUpload}/>}
       </>
    )
}
 
export default Header;