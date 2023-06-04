import * as React from 'react';
import   "./DashBoard.css";
import {Grid} from "@mui/material";
import { useHistory } from "react-router-dom"

const DashBoard=({List})=>{
    const history=useHistory();

    //  console.log(List)
return (
   <div className='OuterContainer'>
    <div className="CardContainer">
    <Grid container >
    {List.map(e=>{
      
        return (
          <Grid item className='video-tile-link' xs={12} lg={3} md={4} sm={6}key={e._id}  >
           <div className='Card video-tile' onClick={()=>{ 
            localStorage.setItem("id", e._id );
            history.push("/video",{from:"/"});
             } }>
            <img className='cardimg' src={e.previewImage} alt="Error to load" ></img>
            <div>
             <p className="GridP " >{e.title}</p> 
             <p className="GridDate">{e.releaseDate}</p>
            </div>
           </div>
          </Grid>
        );
      
      
    })}
     </Grid>
    </div>
    </div>
)
}
export default DashBoard;