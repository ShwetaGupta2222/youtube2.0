import {useState,useEffect} from 'react'
import {Box,Typography} from '@mui/material'
import {Videos} from './'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const SearchFeed = () => {
   const [videos, setVideos] = useState([])
   const {searchTerm} = useParams();
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  },[searchTerm]);
  return (
    <>
      <Box p={2} marginLeft="9vw" sx={{overflowY:'auto',flex:2 }}>
          <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
          Search Results for <span style={{color:'#fc1503'}}>{searchTerm}</span> videos
        </Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center", width:"100%" ,height:"100%"}}> 
            <Box sx={{display:"flex",justifyContent:"center",width:{md:"78vw"
            ,sm:"50%",xs:"50%"
            }}}>
           
                <Videos videos={videos}/>

            </Box>
        </Box>
      
    </>
  )
}

export default SearchFeed