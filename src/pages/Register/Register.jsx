import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import { Box } from "@mui/material";
import { RegisterContext } from "../../context/RegisterStepper";
import { stepSchema } from "../../helpers/helpers";

const Register = () => {
    const { step: currentStep } = useContext(RegisterContext);

  const StepComponent = stepSchema.find(
    (step) => step.id === currentStep
  )?.component;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 1200,
        height: "100%",
        margin: "0 auto",
      }}
    >
      <Layout>
        <StepComponent />
      </Layout>
    </Box>
  );
};

export default Register;
