import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "../../services/ProductsService";

const UpdateProduct = (props) => {
  const [author_name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [novel_name, setNovel] = React.useState("");;
  const id = props.match.params.id;
  React.useEffect(() => {
    productService.getSingleProduct(id).then((data) => {
      setName(data.author_name);
      setEmail(data.email);
      setCity(data.city);
      setGenre(data.genre);
      setNovel(data.novel_name);


    });
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Update Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
      <TextField
          label="Author Name"
          fullWidth
          value={author_name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
         <TextField
          label="City"
          fullWidth
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
         <TextField
          label="Novel Genre"
          fullWidth
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
         <TextField
          label="Novel Name"
          fullWidth
          value={novel_name}
          onChange={(e) => {
            setNovel(e.target.value);
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
              .updateProduct(id, { novel_name, city,genre,author_name,email })
              .then((data) => {
                console.log(data);
                props.history.push("/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Update
        </Button>
      </Grid>
    </Grid>
  );
};

export default UpdateProduct;
