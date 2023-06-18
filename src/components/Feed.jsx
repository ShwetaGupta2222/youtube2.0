import {useState,useEffect} from 'react'
import {Box,Stack,Typography} from '@mui/material'
import {SideBar,Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
   const [selectedCategory, setSelectedCategory] = useState('New');
   const [videos, setVideos] = useState([])
  //  console.log(videos); 
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  },[selectedCategory]);
  return (
    <>
    <Stack
    sx={{flexDirection : {sx:"colum",
    md : "row"},height:{sx:'auto',md:'100vh'}}}
    >
      <Box
    sx={{
    borderRight: '1px solid #3d3d3d',px:{sx:0,md:'2'} }}
    >
      <SideBar 
      selectedCategory = {selectedCategory}
      setSelectedCategory = {setSelectedCategory}
      />
      <Typography className="copyright" varient='body2' sx={{ mt:1.5, background:'#000',color:'#fff'}}>
        Copyright 2022 SHWETA GUPTA
      </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
          <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
          {selectedCategory}
          <span style={{color:'#fc1503'}}> videos</span>
        </Typography>
           <Videos videos = {videos}/>
      </Box>
    </Stack>
    </>
  )
}

export default Feed