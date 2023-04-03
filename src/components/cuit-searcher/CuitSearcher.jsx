import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Celeri from "../../assets/celeri.svg";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { RegisterContext } from "../../context/RegisterStepper";

const CuitSearcher = () => {
  const { step, setStep, setCuit } = useContext(RegisterContext);
  const initialValues = {
    cuit: "",
  };

  const validationSchema = Yup.object({
    cuit: Yup.string()
      .matches(/^[0-9]{11}$/, "El CUIT/CUIL debe tener 11 dígitos")
      .required("El CUIT/CUIL es requerido"),
  });

  const handleSubmit = (values) => {
    setCuit(values);
    setStep(step + 1);
  };

  return (
    <Grid container style={{ maxWidth: 400 }}>
      <Grid xs={12}>
        <img src={Celeri} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ fontWeight: 600 }}>
          Ingresá tu CUIT/CUIL
        </Typography>
      </Grid>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form style={{ width: "100%" }}>
            <Grid item xs={12} style={{ paddingTop: 10 }}>
              <Field
                as={TextField}
                name="cuit"
                label="CUIT/CUIL"
                fullWidth
                error={touched.cuit && Boolean(errors.cuit)}
                helperText={touched.cuit && errors.cuit}
              />
            </Grid>
            <Grid container spacing={2} style={{ paddingTop: 20 }}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{
                    borderRadius: 50,
                    height: 50,
                    textTransform: "none",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                  onClick={() => setStep(step - 1)}
                >
                  Atrás
                </Button>
              </Grid>
              <Grid item xs={6}>
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
                >
                  Continuar
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default CuitSearcher;
