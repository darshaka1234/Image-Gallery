import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ImageUploader = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("done");
    const fd = new FormData();
    fd.append("name", name);
    fd.append("image", image);

    try {
      const response = await axios.post("http://localhost:3001/image", fd);
      console.log(response);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Button onClick={() => navigate("/")} variant="contained">
        Go To Image Gallery
      </Button>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item sm={12}>
            <Typography>Enter Your Name</Typography>
          </Grid>
          <Grid item sm={12}>
            <TextField
              type="text"
              fullWidth
              placeholder="John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Grid item sm={12}>
              <Typography>Select Image</Typography>
            </Grid>
            <Grid item sm={12}>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Grid>
            <Grid item sm={12}>
              <Button type="reset" fullWidth color="error" variant="contained">
                Clear
              </Button>
            </Grid>
            <Grid item sm={12}>
              <Button type="submit" fullWidth variant="contained">
                Upload Image
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ImageUploader;
