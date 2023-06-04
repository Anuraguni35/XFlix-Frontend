import axios from  'axios';
import { config } from '../App';
import React, { useState, useEffect } from 'react';
import DashBoard from "./DashBoard.js";
import Header from "./Header.js";
import { Button } from '@mui/material';
import { Search  } from "@mui/icons-material";
import "./LandingPage.css"
import GenrePanel from './GenrePanel';
const LandingPage=()=>{
    const [ListOfVideos,setListOfVideos]=useState([]);
    const [searchText,setSearchText]=useState("");
   
     
    useEffect(()=>{
     VideoListFetch();
    },[])

    
  
    const VideoListFetch=async()=>{
    let list=await axios.get(`${config.endpoint}`);
    setListOfVideos(list.data.videos);

    }

    const videoListwithcatagory=async(searchText,sortBy,Genre,contentRating)=>{
      let check= {"title":searchText,
                  "sortBy":sortBy,
                  "genres":Genre.join(),   
                  "contentRating":contentRating.join()} 
                  // console.log(check);
                  let ur="";
                  let count=0;
                  for (const key in check) {
                    if(check[key]!==""&&check[key]!==undefined){
                      if(count>0){
                      ur+="&"+key+"="+check[key];
                      }else{
                      ur+=key+"="+check[key]}
                      count++;
                    }
                    // console.log(`${key}: ${check[key]}`);
                }
                // console.log(ur);
     let url=`${config.endpoint}?${ur}`;
     if(ur.length===0){
      url=`${config.endpoint}`;
     }
     let list=await axios.get(url);
     setListOfVideos(list.data.videos);
    }

  
    return(
        <>
        <Header children={
        <div className='SearchDiv'>
        <input type="search" className='search-desktop' placeholder="Search" value={searchText} onChange={e=>setSearchText(e.target.value)}></input><Button className="Searchbtn" onClick={()=>{videoListwithcatagory(searchText)}} ><Search sx={{color:"grey"}} /></Button>
        </div>
      } showupload={true}/>
         <GenrePanel  videolist={videoListwithcatagory} searchText={searchText}/>
        <DashBoard List={ListOfVideos}/>
        </>
    )
}
export default LandingPage;
