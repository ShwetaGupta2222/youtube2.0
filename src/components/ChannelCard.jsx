import { Link } from 'react-router-dom'
import { Box,Typography, Card, CardContent, CardMedia} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture} from '../utils/constants'
const ChannelCard = ({channelDetail,marginTop}) => {
  // console.log(channelDetail)
  return (
    <Box sx={{boxShadow:'none', borderradius:'20px',width:{sx: '305px',xs:'400px',md:'300px'},display:'flex',textAlign:'center',justifyContent:'center',marginTop,}}>
       <Link to ={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
           <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
           alt = {channelDetail?.snippet?.title}
           sx={{borderRadius: '50%',height:'180px',width:'180px',mx:'auto',mb:2,border:'1px solid #e3e3e3'}}
           />
           <Typography varient="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:'12',color:'gray',ml:'5px',height:'20px'}}/>
           </Typography>
           {channelDetail?.statistics?.subscriberCount &&(
            <Typography marginLeft="-15px">
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
           )}
        </CardContent>
       </Link>
    </Box>
  )
}

export default ChannelCard