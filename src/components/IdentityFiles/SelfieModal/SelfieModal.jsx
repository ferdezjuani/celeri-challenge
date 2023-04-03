import { Button, Dialog, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Celeri from "../../../assets/celeri.svg";
import React from "react";
import Selfie from "../../../assets/selfie.svg";

const SelfieModal = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ padding: 5 }}
      >
        <Grid
          item
          xs={false}
          sm={12}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <img src={Celeri} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Validación de identidad
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            Elige de qué forma deseas realizar la validación de identidad
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img src={Selfie} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Validar identidad
          </Typography>
          <Typography variant="body1">con un video tipo selfie</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            style={{
              borderRadius: 50,
              height: 50,
              textTransform: "none",
              backgroundColor: "#000",
            }}
            onClick={() => navigate("/upload-selfie")}
          >
            Validar
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default SelfieModal;
