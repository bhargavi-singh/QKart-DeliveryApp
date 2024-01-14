import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardMedia  component="img" image={product.image} />

      <CardContent>
        <Typography gutterBottom variant="h6">{product.name}</Typography>
        <Typography variant="h5" color="textPrimary" sx={{ fontWeight: "bold" }}>{"$" + product.cost}</Typography>
        <Box display="flex">
          <Rating
            name="read-only"
            value={product.rating}
            readOnly
            size="small"
          />
          <Box sx={{ ml: 1 }}>({product.rating})</Box>
        </Box>
      </CardContent>
      <CardActions className="card-actions">
        <Button className="card-button" variant="contained" onClick={handleAddToCart}>
          <AddShoppingCartOutlined /> Add To Cart 
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
