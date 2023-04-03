import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Celeri from "../../assets/celeri.svg";
import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { RegisterContext } from "../../context/RegisterStepper";

const RegisterForm = () => {
  const { step, setStep, setEmail } = useContext(RegisterContext);

  const handleContinue = (values) => {
    setStep(step + 1);
    setEmail(values)
  };
  const initialValues = {
    email: "",
    termsAccepted: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email inválido").required("Campo requerido"),
    termsAccepted: Yup.boolean().oneOf(
      [true],
      "Debes aceptar los términos y condiciones"
    ),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    handleContinue(values);
  };

  return (
    <Box p={2} maxWidth={500} mx="auto">
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <img src={Celeri} alt="" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" style={{ fontWeight: 600 }}>
            Creá tu cuenta en Celeri
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            style={{ marginTop: 10, color: "#737373" }}
          >
            Empezá a invertir de la manera más fácil
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
            }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="email"
                      label="Email"
                      variant="standard"
                      fullWidth
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={<ErrorMessage name="email" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="termsAccepted"
                          color="primary"
                          checked={values.termsAccepted}
                          onChange={handleChange}
                        />
                      }
                      label="He leído y acepto los Términos y Condiciones"
                    />
                    <br />
                    {touched.termsAccepted && errors.termsAccepted && (
                      <Typography variant="caption" color="error">
                        {errors.termsAccepted}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
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
      </Grid>
    </Box>
  );
};

export default RegisterForm;