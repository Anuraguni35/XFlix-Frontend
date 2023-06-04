/* eslint-disable react-hooks/exhaustive-deps */
// import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/joy/Box';
// import Checkbox from '@mui/joy/Checkbox';
// import Chip from '@mui/joy/Chip';
// import Typography from '@mui/joy/Typography';
import * as React from 'react';
import { useState } from 'react';
import "./GenrePanel.css"
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Select from '@mui/joy/Select';
import FormControl from '@mui/joy/FormControl';
import Option from '@mui/joy/Option';
const GenrePanel=({videolist,searchText} )=>{

    const [Genre, setGenre] =  useState([]);
    const [contentRating,setcontentRating]=useState([]);
    const [sortby,setsortby]=useState("releaseDate")
   React.useEffect(()=>{
    videolist(searchText,sortby,Genre,contentRating);
   },[Genre,contentRating,sortby])

    return (
      <Box className="PanelSec">
        <Box className="GenreSec">
          <Box className="Genre">
           {[
            'All Genre',
            'Education',
            'Sports',
            'Comedy',
            'LifeStyle',
          ].map((e)=>{
            return(
              <label  key={e} className="PillList-item genre-btn">
               <input  name="feature" type="checkbox" label={e}value={e} onClick={(event)=>{event.target.value==='All Genre'?setGenre([])  :  
                 (!event.target.checked? setGenre( Genre.filter(e=>event.target.value!==e) ):setGenre([...Genre,event.target.value]))
               }} ></input>
               <span className="PillList-label">{e}
               </span>
               </label>
            )
          })}
          </Box>
          <Box>
           
{/* <FormControl sx={{ width: 240 }}>
       
      <Select
      className="sort-select"
      sx={{ borderRadius: 25,width:220 }}
        defaultValue="ReleaseDate"
        slotProps={{
          button: {
            id: 'select-field-demo-button',
            'aria-labelledby': 'select-field-demo-label select-field-demo-button',
          },
        }}onChange={(e)=>{ setsortby(e.target.id==="release-date-option"?"ReleaseDate":"ViewCount") }}
      >
        
        <Option  value="ReleaseDate" id="release-date-option"><SwapVertIcon/>Sort By:Release Date </Option>
        <Option  value="ViewCount" id="view-count-option"><SwapVertIcon/>Sort By:View Count</Option>
      </Select>
    </FormControl> */}
            

          <select className="sort-select" name="cars" id="cars" onChange={(e)=>setsortby(e.target.value)}>  
           <option value="ReleaseDate" id="release-date-option" className="Options_sort">Release Date</option>
           <option value="ViewCount" id="view-count-option" className="Options_sort">View Count</option>
          </select>

          </Box>
        </Box>
        <Box>
        <Box>
           {[
            'Any age group',
            '7+',
            '12+',
            '16+',
            '18+'
          ].map((e)=>{
            return(
              <label key={e} className="PillList-item content-rating-btn">
               <input  name="feature" type="checkbox" label={e}value={e} onClick={(event)=>{  event.target.value==='Any age group'?setcontentRating([])  :
                 !event.target.checked? setcontentRating( contentRating.filter(e=>event.target.value!==e) ):setcontentRating([...contentRating,event.target.value])
               }} ></input>
               <span className="PillList-label">{e}
                
               </span>
               </label>
            )
          })}
          </Box>
        </Box>
      </Box>   
    
      
    )
}
export default GenrePanel;