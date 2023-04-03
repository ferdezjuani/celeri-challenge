import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Celeri from "../../../assets/celeri.svg";

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [openWebcam, setOpenWebcam] = useState(false);

  const handleStartCaptureClick = () => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  };

  const handleDataAvailable = ({ data }) => {
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data));
    }
  };

  const handleStopCaptureClick = () => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    recordedChunks.forEach((chunk) => {
      formData.append("video", chunk);
    });
    try {
      const response = await axios.post("https://example.com/upload", formData);
      console.log("Upload success!", response);
    } catch (error) {
      console.error("Upload error!", error);
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid xs={12}>
        <img src={Celeri} />
      </Grid>
      <Grid xs={12}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Carga de documentación
        </Typography>
      </Grid>
      <Grid xs={12}>
        {!openWebcam && (
          <Button onClick={() => setOpenWebcam(true)}>
            Click para empezar a grabar
          </Button>
        )}
        {openWebcam && <Webcam audio={false} ref={webcamRef} />}
      </Grid>
      {openWebcam && (
        <Grid item xs={6}>
          {capturing ? (
            <Button variant="contained" onClick={handleStopCaptureClick}>
              Dejar de grabar
            </Button>
          ) : (
            <Button variant="contained" onClick={handleStartCaptureClick}>
              Grabar
            </Button>
          )}
        </Grid>
      )}
      <Grid item xs={6}>
        <Button onClick={() => handleUpload()}>Enviar</Button>
      </Grid>
    </Grid>
  );
};

export default WebcamCapture;
