import axios from "axios";

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
