import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl ,demoVideoUrl,demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utils/constants'
const VideoCard = ({video : {id:{videoId},snippet,statistics}}) => {
    // console.log(demoChannelUrl)
    console.log(statistics);
  return (
    <Card sx={{width:{sm: '350px',md:'300px'},boxShadow:'none',borderRadius:'0'}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url}
        alt = {snippet?.title}
        sx={{width:{sm: '350px',md:'300px'} ,height:180 }}
        />
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e',height:{xs:'70px',sm:'90px'} }}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <Typography varient="subtitle1" fontWeight='bold' color='#fff' sx={{width:{sm: '350px',md:'300px'}}}>
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
        </Link> 
        <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
            <Typography varient="subtitle2" fontWeight='bold' color='gray'>
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{fontSize:'10',color:'gray',ml:'5px',height:'20px'}}/>
            </Typography>
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard