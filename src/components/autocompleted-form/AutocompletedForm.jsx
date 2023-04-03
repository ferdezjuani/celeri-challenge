import React, { useContext } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Button,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { Formik, Form } from "formik";
import {
  countryOptions,
  economicActivityOptions,
  genderOptions,
  validationSchemaAutocompletedForm,
} from "./schemas";
import { RegisterContext } from "../../context/RegisterStepper";
import Celeri from "../../assets/celeri.svg";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const AutocompletedForm = () => {
  const navigate = useNavigate();
  const { person, email, step, setStep } = useContext(RegisterContext);
  console.log(person);
  return (
    <Formik
      initialValues={{
        firstName: person ? person.nombre : "",
        lastName: person ? person.apellido : "",
        gender: "",
        nationality: "",
        birthDate: person
          ? moment(person.fechaNacimiento).format("YYYY-MM-DD")
          : "",
        email: email ? email.email : "",
        phone: "",
        country: "Argentina",
        province: person?.domicilio[1].descripcionProvincia || "",
        locality: person?.domicilio[1].localidad || "",
        street: person?.domicilio[1].calle || "",
        streetNumber: person?.domicilio[1].numero || "",
        floor: person?.domicilio[1].piso || "",
        apartment: person?.domicilio[1].calle || "",
        postalCode: person?.domicilio[1].codigoPostal || "",
        economicActivity: "",
        obligedSubject: false,
        usTaxResident: false,
      }}
      onSubmit={(values, { setSubmitting }) => {
        const personData = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
        };
        const personDataString = JSON.stringify(personData);
        localStorage.setItem("userData", personDataString);
        setSubmitting(false);
        navigate("/documentation");
      }}
      validationSchema={validationSchemaAutocompletedForm}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid xs={12}>
              <img src={Celeri} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Datos Generales</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="firstName"
                label="Nombre"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="lastName"
                label="Apellido"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                fullWidth
                error={touched.gender && Boolean(errors.gender)}
              >
                <InputLabel>Genero</InputLabel>
                <Select
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <MenuItem value="" disabled>
                    Seleccione una opción
                  </MenuItem>
                  {genderOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                {touched.gender && errors.gender && <div>{errors.gender}</div>}
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                fullWidth
                error={touched.nationality && Boolean(errors.nationality)}
              >
                <InputLabel>Nacionalidad</InputLabel>
                <Select
                  name="nationality"
                  value={values.nationality}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <MenuItem value="" disabled>
                    Seleccione una opción
                  </MenuItem>
                  {countryOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                {touched.nationality && errors.nationality && (
                  <Typography variant="body1">{errors.nationality}</Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="birthDate"
                label="Fecha de nacimiento"
                type="date"
                value={values.birthDate}
                onChange={handleChange}
                onBlur={handleBlur}
                InputLabelProps={{
                  shrink: true,
                }}
                error={touched.birthDate && Boolean(errors.birthDate)}
                helperText={touched.birthDate && errors.birthDate}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Datos de Contacto</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="phone"
                label="Teléfono o celular"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Dirección legal</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="country"
                label="País"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.country && Boolean(errors.country)}
                helperText={touched.country && errors.country}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="province"
                label="Provincia"
                value={values.province}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.province && Boolean(errors.province)}
                helperText={touched.province && errors.province}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="locality"
                label="Localidad"
                value={values.locality}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.locality && Boolean(errors.locality)}
                helperText={touched.locality && errors.locality}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="street"
                label="Calle"
                value={values.street}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.street && Boolean(errors.street)}
                helperText={touched.street && errors.street}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="streetNumber"
                label="Altura"
                value={values.streetNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.streetNumber && Boolean(errors.streetNumber)}
                helperText={touched.streetNumber && errors.streetNumber}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="floor"
                label="Piso"
                value={values.floor}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.floor && Boolean(errors.floor)}
                helperText={touched.floor && errors.floor}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="apartment"
                label="Apartamento"
                value={values.apartment}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.apartment && Boolean(errors.apartment)}
                helperText={touched.apartment && errors.apartment}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="postalCode"
                label="Código Postal"
                value={values.postalCode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.postalCode && Boolean(errors.postalCode)}
                helperText={touched.postalCode && errors.postalCode}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Dirección legal</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                fullWidth
                error={
                  touched.economicActivity && Boolean(errors.economicActivity)
                }
              >
                <InputLabel>Actividad económica</InputLabel>
                <Select
                  name="economicActivity"
                  value={values.economicActivity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <MenuItem value="" disabled>
                    Seleccione una opción
                  </MenuItem>
                  {economicActivityOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                {touched.economicActivity && errors.economicActivity && (
                  <Typography variant="body1">
                    {errors.economicActivity}
                  </Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                component="fieldset"
                error={touched.obligedSubject && !!errors.obligedSubject}
              >
                <FormLabel component="legend">
                  ¿Es usted sujeto obligado?
                </FormLabel>
                <RadioGroup
                  aria-label="obligedSubject"
                  name="obligedSubject"
                  value={values.obligedSubject}
                  onChange={handleChange}
                >
                  <Grid container>
                    <Grid item xs={6}>
                      <FormControlLabel
                        value={true}
                        control={<Radio />}
                        label="Sí"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        value={false}
                        control={<Radio />}
                        label="No"
                      />
                    </Grid>
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                component="fieldset"
                error={touched.usTaxResident && !!errors.usTaxResident}
              >
                <FormLabel component="legend">
                  ¿Es residente fiscal de los EE.UU conforme FATCA?
                </FormLabel>
                <RadioGroup
                  aria-label="usTaxResident"
                  name="usTaxResident"
                  value={values.usTaxResident}
                  onChange={handleChange}
                >
                  <Grid container>
                    <Grid item xs={6}>
                      <FormControlLabel
                        value={true}
                        control={<Radio />}
                        label="Sí"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        value={false}
                        control={<Radio />}
                        label="No"
                      />
                    </Grid>
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  borderRadius: 50,
                  height: 50,
                  textTransform: "none",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
                fullWidth
                onClick={() => setStep(step - 2)}
              >
                Cancelar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  borderRadius: 50,
                  height: 50,
                  textTransform: "none",
                  backgroundColor: "#000",
                }}
                fullWidth
              >
                Continuar
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default AutocompletedForm;
