import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";

const CardItem = (props) => {
  //   console.log(props.products);
  return (
    <div
      className="container my-5"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {props.products.map((p) => (
        <Card
          className="card-body"
          sx={{ maxWidth: 300, margin: 1, height: 380 }}
        >
          <CardActionArea>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={p.image}
                alt=""
                style={{ height: "150px", width: "150px" }}
              />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {p.title.substring(0, 16)}...
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {p.description.substring(0, 60)}...
              </Typography>
            </CardContent>
          </CardActionArea>
          <Box>
            <p
              style={{
                fontSize1: "14px",
                fontFamily: "sans-serif",
                fontWeight: "600",
                marginLeft: "18px",
                color: "gray",
              }}
            >
              ${p.price}
            </p>
          </Box>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              Add to cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default CardItem;
