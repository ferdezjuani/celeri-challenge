import React, { useContext } from "react";
import Celeri from "../../../assets/celeri.svg";
import { Button, Grid, Typography } from "@mui/material";
import { RegisterContext } from "../../../context/RegisterStepper";

const RegisterValidation = () => {
  const { step, setStep } = useContext(RegisterContext);
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <img src={Celeri} alt="" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2">
          Ya existe un proceso de vinculación de cuenta en Celeri.
        </Typography>
        <Typography variant="subtitle2">¿Deseas continuarlo?</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{
            borderRadius: 50,
            height: 50,
            textTransform: "none",
            backgroundColor: "#000",
          }}
          onClick={() => setStep(step + 1)}
        >
          SI, deseo continuarlo
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => setStep(step - 1)}
          fullWidth
          style={{
            borderRadius: 50,
            height: 50,
            textTransform: "none",
            backgroundColor: "#ffff",
            color: "#000",
          }}
        >
          NO, iniciar desde cero
        </Button>
      </Grid>
    </Grid>
  );
};

export default RegisterValidation;
