/* eslint-disable react-hooks/exhaustive-deps */
import Header from "./Header";
import { Box } from "@mui/material";
import { config } from "../App";
import { useEffect, useState } from "react";
import axios from "axios";
import Iframe from "react-iframe";
import "./VideoPage.css";
import DashBoard from "./DashBoard.js";
// import CheckIcon from "@mui/icons-material/Check";
// import Checkbox from "@mui/joy/Checkbox";
// import Chip from "@mui/joy/Chip";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const VideoPage = () => {
  const [video, setvideo] = useState({});
  const [ListOfVideos, setListOfVideos] = useState([]);
  const [activeBtn, setActiveBtn] = useState({"up":"like","Down":"like"});
  useEffect(() => {
    Getcurrentvideo();
    VideoListFetch();
  }, []);

  const Getcurrentvideo = async () => {
    let res = await axios.get(
      `${config.endpoint}/:${localStorage.getItem("id")}`
    );
    setvideo({
      link: `https://${res.data.videoLink}`,
      title: res.data.title,
      viewCount: res.data.viewCount + 1,
      releaseDate: res.data.releaseDate,
      upvote: res.data.votes.upVotes,
      downvote: res.data.votes.downVotes,
    });
    let req = await axios.patch(
      `${config.endpoint}/:${localStorage.getItem("id")}/views`,
      `${video.viewCount + 1}`
    );
    console.log(req);
  };

  const VideoListFetch = async () => {
    let list = await axios.get(`${config.endpoint}`);
    setListOfVideos(list.data.videos);
  };

  const handleVote = async (e) => {
    // let vote = await axios.patch(
    //   `${config.endpoint}/:${localStorage.getItem("id")}/votes`
    // );
    // console.log(vote);
    console.log(e.target.value);
    if(e.target.id==="up"){
      setActiveBtn({"up":"active-like","Down":"like"})
    }else if(e.target.id==="down"){
      setActiveBtn({"up":"like","Down":"active-like"})
    }
    // if (activeBtn === "none") {
    //   setActiveBtn("like");
    //   return;
    // }
 
    // if (activeBtn === 'like'){
      
    //   setActiveBtn("none");
    //   return;
    // }
 
    // if (activeBtn === "dislike") {
    //   setActiveBtn("like");
    // }
  };

  return (
    <div>
      <Header showupload={false} />
      <Box className="VideoContainer ">
        <Box className="videoCard">
          <Iframe
            url={video.link}
            width="1250vh"
            height="500vh"
            id=""
            className="Videoplayer"
            display="block"
          />
          <div className="titleSecOuter">
            <span className="titleSec">
              <span style={{ fontSize: "3.5vh", marginTop: "2vh" }}>
                {video.title}
              </span>

              <span style={{ alignSelf: "start", marginTop: "1.5vh" }}>
                <span style={{ fontSize: "12px", color: "grey" }}>
                  {" "}
                  +{video.viewCount}
                </span>
                <span
                  style={{ fontSize: "12px", color: "grey", marginLeft: "6px" }}
                >
                  &#9679;
                </span>
                <span
                  style={{ fontSize: "12px", color: "grey", marginLeft: "6px" }}
                >
                  {video.releaseDate}
                </span>
              </span>
            </span>
             
              
              <div className="container">
                <div className="btn-container">
                  <label for="up" >
                  <button id="up"  
                    className={`btn ${
                      activeBtn.up === "like" ? "like" : "active-like"
                    }`}
                    onClick={(e)=>handleVote(e)}
                  ><ThumbUpAltIcon   style={{fontSize:"2.5vh",marginRight:"7px"}}/>
                    {/* <span className="material-symbols-rounded"></span> */}
                    <span >{video.upvote}</span>
                  </button></label>

                  <button id="down"
                    className={`btn ${
                      activeBtn.Down === "like" ? "like" : "active-like"
                    }`}
                    onClick={(e)=>handleVote(e)}
                  ><ThumbDownAltIcon style={{fontSize:"2.5vh",marginRight:"7px"}}/>
                    {/* <span className="material-symbols-rounded"> </span> */}
                     {video.downvote}
                  </button>
                </div>
              </div>
               
             
          </div>
        </Box>
      </Box>
      <hr className="seprator" />
      <DashBoard List={ListOfVideos} />
    </div>
  );
};
export default VideoPage;
