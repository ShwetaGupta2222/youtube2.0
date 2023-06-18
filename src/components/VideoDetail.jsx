import {useState, useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Box,Typography,Stack,CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {Videos,ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import {demoChannelUrl,demoProfilePicture} from '../utils/constants'

const VideoDetail = () => {
   // console.clear();
  const [videoDetail, setVideoDetail] = useState(null)
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} =  useParams();
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetail(data?.items[0]) );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>setVideos(data.items));
   },[id]);
   useEffect(()=>{
      if(videoDetail)fetchFromAPI(`channels?part=snippet&id=${videoDetail.snippet.channelId}`).then((data)=> setChannelDetail(data?.items[0]));
   },[videoDetail]);
     if(!videoDetail?.snippet)return <>{"Loading..."}</>
   const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videoDetail
   return (
    <Box minHeight="95vh">
       <Stack direction={{xs:"column",sm:"column",md:"row"}}>
          <Box flex={1}>
              <Box sx={{width:"100%",position:"sticky",top:"87px",height:{xs:"425px", sm:"500px",md:"500px"}}}>
                 <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                  height="75%"  width="100%"
                  controls
                 />         
                 <Typography color="#fff" varient="h5" fontWeight="bold" p = {2}>
                    {title}
                 </Typography>
                 <Stack direction="row" justifyContent="space-between" sx={{color:"#fff"}} my={-2} px={2}>

                           <Stack direction="row" alignItems="center" gap={2}><CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                           alt = {title}
                          sx={{borderRadius: '50%',height:'50px',width:'50px',border:'1px solid #e3e3e3'}}
                          />
                    
                        <Link to={channelTitle?`/channel/${channelId}`:demoChannelUrl}>
                          <Typography varient={{sm:"subtitle1",md:"h5"}} color="#fff">
                           {channelTitle}
                           <CheckCircle sx={{fontSize:'12',color:'gray',ml:'5px',height:'20px'}}/>
                        </Typography>
                    </Link>
                    </Stack>
                    <Stack direction="row" gap="20px" alignItems="center">
                       <Typography varient="body1" sx={{opacity:0.7}}>
                          {parseInt(viewCount).toLocaleString()} views
                       </Typography>
                       <Typography varient="body1" sx={{opacity:0.7}}>
                          {parseInt(likeCount).toLocaleString()} likes
                       </Typography>
                    </Stack>
                 </Stack>
              </Box>
          </Box>
          <Box px={2} py={{md:1,xs:5}}
           display="flex" alignItems="center" justifyContent="center"
           >
                   <Videos videos={videos} direction="column"/>
          </Box>
       </Stack> 
    </Box>
  )
}

export default VideoDetail