import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, Typography, Grid } from "@mui/material";
import Register from "./pages/Register/Register";
import DocumentationUploader from "./pages/DocumentationUploader/DocumentationUploader";
import SelfieUploader from "./pages/SelfieUploader/SelfieUploader";

function ConfirmFormContinueModal({ onClose }) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onClose();
    navigate("/documentation");
  };

  const handleClose = () => {
    navigate("/");
    localStorage.removeItem("userData");
    onClose();
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ padding: 5 }}
      >
        <Grid item xs={12}>
          <Typography variant="h5">
            Tienes una apertura en proceso, ¿continuar?
          </Typography>
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
            onClick={handleClose}
          >
            No
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            style={{
              borderRadius: 50,
              height: 50,
              textTransform: "none",
              backgroundColor: "#000",
            }}
            fullWidth
            onClick={handleContinue}
          >
            Sí
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
}

function App() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const userData = localStorage.getItem("userData");

  useEffect(() => {
    if (userData) {
      setShowConfirmModal(true);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/documentation" element={<DocumentationUploader />} />
        <Route path="/upload-selfie" element={<SelfieUploader />} />
        <Route path="*" element={<Register />} />
      </Routes>
      {showConfirmModal && (
        <ConfirmFormContinueModal onClose={() => setShowConfirmModal(false)} />
      )}
    </>
  );
}

export default App;
