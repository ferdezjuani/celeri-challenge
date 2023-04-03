import { Grid } from "@mui/material";
import React from "react";
import { ReactComponent as CeleriDivider } from "../../assets/celeri-divider.svg";

const Layout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        {children}
      </Grid>
      <Grid item xs={false} sm={6} sx={{ display: { xs: "none", sm: "block" } }}>
        <CeleriDivider
          style={{ height: "100%", width: "100%", display: "block" }}
        />
      </Grid>
    </Grid>
  );
};

export default Layout;
