import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Button } from "@deere/fuel-react";

function Cards({ data }) {
  return (
    <div className="col" style={{ padding: "10px" ,height:"100%"}}>
      <div
        className="card"
        style={{
          height: "100%",
          border: "none",
          boxShadow: "0 1px 8px rgba(0, 0, 0, .175)",
        }}
      >
        <div
          className="card-body"
          style={{ flex: " 1 1 auto", minHeight: "1px", padding: "1.25rem", position:"relative" }}
        >
          <div style={{height:"auto",width:"auto"}}>{data.icon}</div>
          <div>
            <h6
              style={{
                fontSize: "1rem",
                fontFamily: "inherit",
                lineHeight: "1.2",
                marginBottom: " .5rem",
              }}
            >
              {data.heading}
            </h6>
          </div>

          <p style={{ marginBottom: "1rem", marginTop: "0" }}>{data.content}</p>

          <div style={{ left:"20px", buttom:"20px", position:"absolute"}} >
            <Button size="medium" variant="primary">
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
