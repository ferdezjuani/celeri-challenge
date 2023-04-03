import React, { useEffect, useState } from "react";
import Celeri from "../../assets/celeri.svg";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import IdentityFiles from "../../components/IdentityFiles/IdentityFiles";

const DocumentationUploader = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      setUserData(userData);
    } else {
      navigate("/");
    }
  }, []);
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <img src={Celeri} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{fontWeight: 700}}>
          Cargá la siguiente documentación para finalizar
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          Recordá que podés enviar más de un archivo por cada tipo de documento
          sin superar los 100mb por archivo.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5"s x={{fontWeight: 700}}>
          {userData?.firstName} {userData?.lastName}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <IdentityFiles userData={userData} />
      </Grid>
    </Grid>
  );
};

export default DocumentationUploader;
