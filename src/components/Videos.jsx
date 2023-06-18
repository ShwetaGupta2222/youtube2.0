import {Stack,Box} from '@mui/material'
import {ChannelCard,VideoCard} from './'

const Videos = ({videos,direction}) => {
  return (
     <Stack direction={direction||"row"} flexWrap='wrap' justifyContent={{xs:"center",sm:"center",md:"center"}} gap={2}>
       {videos.map((item,idx)=>(
        <Box key ={idx} sx={{width:{sx: '300px',xs:'350px',md:'309px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
       ))}
     </Stack>
  )
}

export default Videos