import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import MyCard from './MyCard';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

function App() {
  const [attractions, setAttractions] = useState([])
  useEffect(() => {
    fetch('https://www.melivecode.com/api/attractions')
      .then(res => res.json())
      .then(result => {
        setAttractions(result)
      })
  }, [])
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom>
      Attractions
      </Typography>
      <Grid container spacing={2}>
        { attractions.map(attraction => (
          <Grid size={{ xs: 6, md: 4 }}>
            <MyCard attraction={attraction} />
          </Grid>
          ))}
      </Grid>
      </Container>
    </div>
    
    
  )
}

export default App