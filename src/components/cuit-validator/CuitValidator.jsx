import {
  Alert,
  Box,
  Button,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import Celeri from "../../assets/celeri.svg";
import CeleriLoadingState from "../../assets/celeri-loading-state.svg";
import React, { useContext, useEffect, useState } from "react";
import { getPersona } from "../../api/api";
import { RegisterContext } from "../../context/RegisterStepper";

const CuitValidator = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cuit, step, setStep, setPerson } = useContext(RegisterContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPersona(cuit.cuit);
        setPerson(response.persona);
        setStep(step + 1);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(error);
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ maxWidth: 400 }}
    >
      <Grid xs={12}>
        <img src={Celeri} />
      </Grid>
      {loading && (
        <>
          <Grid xs={12}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Aguardá unos segundos por favor
            </Typography>
            <Box sx={{ padding: 5 }}>
              <LinearProgress color="inherit" />
            </Box>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ boxShadow: 5 }}
          >
            <Grid xs={4} sx={{ padding: 1 }}>
              <img src={CeleriLoadingState} alt="" />
            </Grid>
            <Grid xs={8} sx={{ padding: 1 }}>
              <Typography variant="body2">
                ¿Sabías que con celeri podes comprar dólares en 3 simples pasos?
              </Typography>
            </Grid>
          </Grid>
        </>
      )}
      {error && (
        <Grid xs={12}>
          <Alert severity="error">{error.response.data}</Alert>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{
              borderRadius: 50,
              height: 50,
              textTransform: "none",
              backgroundColor: "#000",
            }}
            onClick={() => setStep(step - 1)}
          >
            Volver
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default CuitValidator;
