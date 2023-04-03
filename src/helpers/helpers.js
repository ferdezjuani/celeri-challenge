import AutocompletedForm from "../components/autocompleted-form/AutocompletedForm";
import CuitSearcher from "../components/cuit-searcher/CuitSearcher";
import CuitValidator from "../components/cuit-validator/CuitValidator";
import RegisterForm from "../components/register-form/RegisterForm";
import RegisterValidation from "../components/register-form/register-validation/RegisterValidation";

export const stepSchema = [
  {
    id: 1,
    component: RegisterForm,
  },
  {
    id: 2,
    component: RegisterValidation,
  },
  {
    id: 3,
    component: CuitSearcher,
  },
  {
    id: 4,
    component: CuitValidator,
  },
  {
    id: 5,
    component: AutocompletedForm,
  },
];

export function isAuthenticated() {
  const userData = localStorage.getItem("userData");
  return userData ? true : false;
}
