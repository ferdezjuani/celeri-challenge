import axios from "axios";

const BASE_URL =
  "https://api-gateway.staging.scala.ly/afip/ws_sr_padron_a13/getPersona";
const API_KEY = "ChTec.mnJeDQsJijJVdLZ409HHgcOnY1OnhZr4DgCvhzWebKqGnQX55M";

export const getPersona = async (idPersona, queryParamName = "idPersona") => {
  const config = {
    headers: {
      Authorization: `Apikey ${API_KEY}`,
    },
    errorHandler: (error) => {
      throw new Error(error);
    },
  };

  const response = await axios.get(
    `${BASE_URL}?${queryParamName}=${idPersona}`,
    config
  );
  return response.data;
};
