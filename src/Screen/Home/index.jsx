import { Button, Card, CardActions, CardContent, CardHeader, Grid } from "@mui/material";
import React from "react";
import Title from "../../Component/Title";
import { dataHome } from "../../Service/Dummy/data";
import "../../Style/home.css"

const Home = (props) => {

  return (
      <Grid container direction="column" sx={{ml:"240px", width:"unset"}}>
        <Grid item xs={6} sx={{p:4, pt:0}}>
          <Title text="Welcome to PGI Product"/>
          <Grid container>
            <Grid xs={6} item>
              <Card sx={{width:"100%", background:"white", borderRadius : 2, borderTop:"10px solid #02216F", fontSize:".8rem"}}>
                <CardHeader
                  sx={{fontSize:"1rem"}}
                  titleTypographyProps={{fontSize:"1rem" }}
                  subheaderTypographyProps={{fontSize:".75rem"}}
                  title="Lets Select Subscription"
                  subheader="12 Agustus 2022"/>
                <CardContent sx={{pt:0}}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quia tempore expedita pariatur sequi, possimus asperiores non accusantium atque itaque eaque deserunt excepturi voluptates voluptas ducimus voluptate eius a? Tenetur qui facere magnam reiciendis maiores fuga, architecto natus veniam. Cum doloremque pariatur placeat iste eum debitis optio. Sunt, saepe hic.
                </CardContent>
                <CardActions sx={{pt:0}}>
                  <Button>Select Subscription</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
      </Grid>
      <Grid item container spacing={3} direction={"row"} xs={6} sx={{background:"white", p:3}}>
        {dataHome.map((res)=> {
          return (
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <div className="image-home-card primary">

                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container spacing={1} direction={"column"}>
                      <Grid item xs={6}>
                        <div className="image-home-card">
                      
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="image-home-card">
                      
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <CardHeader
                  sx={{fontSize:"1rem", pt:0}}
                  titleTypographyProps={{fontSize:"1rem" }}
                  subheaderTypographyProps={{fontSize:".75rem"}}
                  title={res.title}
                  subheader={res.date}/>
            <CardContent sx={{fontSize:"12px" ,pt:0}} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quidem animi repudiandae. Incidunt id suscipit perferendis quae? Perspiciatis, voluptates iusto recusandae fugiat sequi ut vitae unde repellendus exercitationem minus quo?
            </CardContent>
            </Card>
          </Grid>
          )
        }
        )}
      </Grid>
      </Grid>

  );
};

export default Home;
