import { Component } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {ChatBubbleOutlineTwoTone, FavoriteBorderTwoTone, PresentToAllTwoTone} from "@mui/icons-material"
  
  const cards = [1, 2, 3, 4, 5, 6];
  
  const theme = createTheme();

export default class Public extends Component{

    render(){

        return (
            <ThemeProvider theme={theme}>
      <CssBaseline />
           
           <Container sx={{ py: 8 }} maxWidth="md">
                   <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    height={200}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                    <div className="card">          
                    <div>
                    <PresentToAllTwoTone/>
                        
                    </div>
                   
                    <div>
                    <FavoriteBorderTwoTone/>
                        <p>{Math.floor(Math.random() * 10)}</p>
                    </div>
                    <div>
                    <ChatBubbleOutlineTwoTone/>
                        <p>{Math.floor(Math.random() * 100)}</p>
                    </div>
</div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
     
  
    </ThemeProvider>
  );
    }
}
