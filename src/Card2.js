import react from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@deere/fuel-react";
export default function Card2({ data }) {
  return (
    <div
      style={{
        height: "100%",
        boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding:"16px"
      }}
    >
      <Card sx={{ maxWidth: 345 }} style={{ boxShadow: "0 0 0 0" , padding:"0"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ width: "50px" }}
            image={data.icon}
            alt="green iguana"
          />
          <CardContent style={{padding:"0"}}>
            <Typography gutterBottom variant="h5" component="div">
              {data.heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <footer style={{ marginTop: "16px" }}>
        <Button size="small" variant="primary" style={{borderRadius:"0",}}>
          Proceed
        </Button>
      </footer>
    </div>
  );
}
