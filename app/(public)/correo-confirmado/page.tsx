"use client";
import { Button, Container, Typography } from "@mui/material";
import { CONTENT_TEXT } from "./content";
import Link from "next/link";

export default function CorreoConfirmado() {
  return (
    <Container maxWidth="xs" sx={{ mt: "130px" }}>
      <Typography variant="h4" component="h1" sx={{ mb: "40px" }}>
        {CONTENT_TEXT.PAGE.EMAIL_CONFIRMED}
      </Typography>
      <Typography
        sx={{
          mb: "32px",
        }}
      >
        {CONTENT_TEXT.PAGE.CONFIRMATION}
      </Typography>
      <Button variant="contained" href="/iniciar-sesion" LinkComponent={Link}>
        {CONTENT_TEXT.PAGE.LOGIN}
      </Button>
    </Container>
  );
}
