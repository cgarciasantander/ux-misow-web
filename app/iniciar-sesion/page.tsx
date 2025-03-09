"use client";
import { GoogleBrand } from "@/components/icons/GoogleBrand";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { CONTENT_TEXT } from "./content";
import { ChangeEventHandler, useState } from "react";
import { PasswordField } from "@/components/field/PasswordField";


type FormValues = {
  email: {
    value?: string | null,
    error?: string | null,
  },
  password: {
    value?: string | null,
    error?: string | null,
  },
};

export default function IniciarSesion() {
  const [form, setForm] = useState<FormValues>({
    email: {
      value: null,
      error: null,
    },
    password: {
      value: null,
      error: null,
    },
  });

  const handleEmailChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event): void => {
    const value = event.target.value;

    setForm({
      ...form,
      email: {
        value,
        error: !value.trim() ? "Correo electrónico es requerido." : null
      }
    })
  }

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>  = (event) => {
    const value = event.target.value;

    setForm({
      ...form,
      password: {
        value,
        error: !value.trim() ? "Contraseña es requerido." : null
      }
    })
  }

  const isValid = !!(form.email.value?.trim() && form.password.value?.trim())
  console.log(isValid);
  return (
    <Container maxWidth="xs" sx={{ mt: "170px" }}>
      <Typography variant="h4" component="h1" sx={{ mb: "48px" }}>
        {CONTENT_TEXT.PAGE.LOGIN}
      </Typography>
      <Button startIcon={<GoogleBrand />} fullWidth variant="official">
        {CONTENT_TEXT.PAGE.LOGIN_WITH_GOOGLE}
      </Button>
      <Divider textAlign="center" sx={{ mb: "24px", mt: "24px" }}>
        {CONTENT_TEXT.PAGE.OR}
      </Divider>
      <TextField
        fullWidth
        required
        error={!!form.email.error}
        helperText={form.email.error ?? null}
        onChange={handleEmailChange}
        type="email"
        variant="outlined"
        label="Correo electrónico"
        sx={{
          mb: "32px",
        }}
      />
      <PasswordField
        required
        fullWidth
        error={!!form.password.error}
        helperText={form.password.error ?? null}
        onChange={handlePasswordChange}
        variant="outlined"
        label="Contraseña"
        sx={{
          mb: "32px",
        }}
      />
      <Box display="flex" gap="8px">
        <Button disabled={!isValid} variant="contained">
          {CONTENT_TEXT.PAGE.LOGIN}
        </Button>
        <Button>{CONTENT_TEXT.PAGE.FORGOT_PASSWORD}</Button>
      </Box>
    </Container>
  );
}
