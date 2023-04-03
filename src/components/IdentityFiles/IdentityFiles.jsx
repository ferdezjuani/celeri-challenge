import { Alert, Button, Chip, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import WebcamCapture from "./WebcamCapture/WebcamCapture";
import SelfieModal from "./SelfieModal/SelfieModal";

const IdentityFiles = ({ userData }) => {
  const [open, setOpen] = useState(false);
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Alert variant="outlined" severity="success" sx={{ maxWidth: 800 }}>
          <Grid container spacing={2} direction="row">
            <Grid item xs={2}>
              <Chip
                label="Aprobado"
                variant="outlined"
                sx={{ backgroundColor: "#C3E6CD" }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">Frente de DNI</Typography>
              <Typography variant="caption" color="#737373">
                Una foto del frente del DNI de {userData?.firstName}{" "}
                {userData?.lastName}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                component="label"
                htmlFor="fileInput"
                size="small"
              >
                Subir
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Alert>
      </Grid>
      <Grid item xs={12}>
        <Alert variant="outlined" severity="success" sx={{ maxWidth: 800 }}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={2}>
              <Chip
                label="Aprobado"
                variant="outlined"
                sx={{ backgroundColor: "#C3E6CD" }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">Dorso de DNI</Typography>
              <Typography variant="caption" color="#737373">
                Una foto del dorso del DNI de {userData?.firstName}{" "}
                {userData?.lastName}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                component="label"
                htmlFor="fileInput"
                size="small"
              >
                Subir
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Alert>
      </Grid>
      <Grid item xs={12}>
        <Alert variant="outlined" severity="warning" sx={{ maxWidth: 800 }}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={2}>
              <Chip
                label="Pendiente"
                variant="outlined"
                sx={{ backgroundColor: "#F5D9A8" }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">Validación de identidad</Typography>
              <Typography variant="caption" color="#737373">
                Validación de identidad de {userData?.firstName}{" "}
                {userData?.lastName}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                component="label"
                size="small"
              >
                Validar
              </Button>
            </Grid>
          </Grid>
        </Alert>
      </Grid>
      <SelfieModal open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default IdentityFiles;
