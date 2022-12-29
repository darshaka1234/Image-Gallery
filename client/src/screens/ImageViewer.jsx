import { Button, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ImageViewer = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3001/image", {
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        console.log("excuted", Date.now());
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <div className="">
      <Button onClick={() => navigate("/upload")} variant="contained">
        Add Image
      </Button>
      <Grid container>
        {data.map((item) => {
          const bs64 = btoa(
            String.fromCharCode(...new Uint8Array(item.image.data.data))
          );
          return (
            <div className="item" key={item.name}>
              <Grid item sm={12}>
                <Typography>{item.name}</Typography>
              </Grid>
              <Grid item sm={12}>
                <img src={`data:image/png;base64,${bs64}`} alt={item.name} />
              </Grid>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default ImageViewer;
