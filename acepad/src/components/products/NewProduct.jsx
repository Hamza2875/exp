import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "./../../services/ProductsService";
import Auth from "../auth/Auth";
const NewProduct = (props) => {
  const [author_name, setaName] = React.useState("");
  const [novel_name, setnName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [genre, setgenre] = React.useState("");
  return (
    <Auth>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Add New Product</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="author name"
            fullWidth
            value={author_name}
            onChange={(e) => {
              setaName(e.target.value);
            }}
          />
          <TextField
            label="novel_name"
            fullWidth
            value={novel_name}
            onChange={(e) => {
              setnName(e.target.value);
            }}
          />
          <TextField
            label="price"
            fullWidth
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <TextField
            label="genre"
            fullWidth
            value={genre}
            onChange={(e) => {
              setgenre(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              productService
                .addProduct({ author_name, novel_name, price, genre })
                .then((data) => {
                  console.log(data);
                  props.history.push("/products");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add New
          </Button>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default NewProduct;
