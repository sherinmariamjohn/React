import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React, {useState} from 'react'

export default function App() {

  let [counter,setCounter] = useState(0);

  const handleAdd = ()=>{
    setCounter(++counter)
  }

  const handleSubtract = ()=>{
    if(counter>0){
   setCounter(prevCounter => prevCounter - 1); 
  } else {
    setCounter(counter -1); 
  }
  }
  
    return (
    <>
      <Container sx={ContainerStyle}>
        <Box 
          sx={BoxStyle}
          >

        <Typography align="center" variant="h1" gutterBottom>
           {counter}
        </Typography>

        <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleAdd} >INCREMENT+</Button>
        <Button variant="contained" onClick={handleSubtract} disabled={counter===0} >DECREMENT-</Button>

        </Stack>

        </Box>
        
      </Container>
      
    </>
  );
}

     const BoxStyle={
          backgroundColor:'#827f7f',
          borderRadius:'5px',
          width:"40%",
          padding:"20px",
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'column',
          boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",          
        };

        const ContainerStyle = {
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          height:'100vh'
        };
        


