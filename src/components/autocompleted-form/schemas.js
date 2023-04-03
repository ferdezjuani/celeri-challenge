import * as yup from "yup";

export const validationSchemaAutocompletedForm = yup.object().shape({
  firstName: yup.string().required("El primer nombre es requerido"),
  lastName: yup.string().required("El apellido es requerido"),
  gender: yup.string().required("El género es requerido"),
  nationality: yup.string().required("La nacionalidad es requerida"),
  birthDate: yup.date().required("La fecha de nacimiento es requerida"),
  email: yup
    .string()
    .email("El email no es válido")
    .required("El email es requerido"),
  phone: yup.string().required("El número de teléfono es requerido"),
  country: yup.string().required("El país es requerido"),
  province: yup.string().required("La provincia es requerida"),
  locality: yup.string().required("La localidad es requerida"),
  street: yup.string().required("La calle es requerida"),
  streetNumber: yup.number().required("La altura es requerida"),
  postalCode: yup.string().required("El código postal es requerido"),
  economicActivity: yup
    .string()
    .required("La actividad económica es requerida"),
  obligedSubject: yup.boolean().required("Esta pregunta es requerida"),
  usTaxResident: yup.boolean().required("Esta pregunta es requerida"),
});

export const genderOptions = [
  { label: "Masculino", value: "masculino" },
  { label: "Femenino", value: "femenino" },
];

export const countryOptions = [
  { label: "Argentina", value: "argentina" },
  { label: "Otro", value: "otro" },
];

export const provinceOptions = [
  { label: "Buenos Aires", value: "buenosaires" },
  { label: "Córdoba", value: "cordoba" },
  { label: "Santa Fe", value: "santafe" },
  { label: "Mendoza", value: "mendoza" },
  { label: "Entre Ríos", value: "entrerios" },
];

export const economicActivityOptions = [
  { label: "Empleado en relación de dependencia", value: "1" },
  { label: "Monotributista", value: "2" },
];
