import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import {Videos,ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams();
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=> setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items));
  },[id])
  return (
     <Box minHeight="95vh">
        <Box>
          <div style = {{
            background: "rgb(2,0,36)",
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(24,9,121,1) 1%, rgba(0,212,255,1) 100%)",
            zIndex:10,
            height:"230px"
          }}
          />
          <Box sx={{display:'flex',textAlign:'center',justifyContent:'center'}}><ChannelCard channelDetail={channelDetail} marginTop="-90px"/></Box>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center", width:"100%" ,height:"100%"}}> 
            <Box sx={{display:"flex",justifyContent:"center",width:{md:"78vw"
            ,sm:"50%",xs:"50%"
            }}}>
                <Videos videos={videos}/>

            </Box>
        </Box>
     </Box>
  )
}

export default ChannelDetail