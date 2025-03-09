"use client";
import { Container, Typography } from "@mui/material";
import { CONTENT_TEXT } from "./content";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function ConfirmarCorreo() {
  useEffect(() => {
    setTimeout(() => {
      redirect('/correo-confirmado')
    }, 5000);
  }, [])

  return (
    <Container maxWidth="xs" sx={{ mt: "130px" }}>
      <Typography variant="h4" component="h1" sx={{ mb: "48px" }}>
        {CONTENT_TEXT.PAGE.CONFIRM_EMAIL}
      </Typography>
      <Typography gutterBottom>
        {CONTENT_TEXT.PAGE.INSTRUCTIONS_LINE_1}
      </Typography>
      <ol>
        <Typography component="li">
          {CONTENT_TEXT.PAGE.INSTRUCTIONS_STEP_1}
        </Typography>
        <Typography component="li">
          {CONTENT_TEXT.PAGE.INSTRUCTIONS_STEP_2}
        </Typography>
      </ol>
      <Typography gutterBottom>
        {CONTENT_TEXT.PAGE.INSTRUCTIONS_LINE_2}
      </Typography>
      <Typography gutterBottom sx={{ mb: "32px" }}>
        {CONTENT_TEXT.PAGE.INSTRUCTIONS_LINE_3}
      </Typography>
      <Typography variant="h6">
        {" "}
        {CONTENT_TEXT.PAGE.INSTRUCTIONS_LINE_4}
      </Typography>
    </Container>
  );
}
