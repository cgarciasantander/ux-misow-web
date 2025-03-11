"use client";
import { GoogleBrand } from "@/components/icons/GoogleBrand";
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { CONTENT_TEXT } from "./content";
import { ChangeEventHandler, useState } from "react";
import { PasswordField } from "@/components/field/PasswordField";
import { TextField } from "@/components/field/TextField";
import { useUserContext } from "@/hooks/useUser";
import { redirect } from "next/navigation";

type FormValues = {
  email: {
    value?: string | null;
    error?: string | null;
  };
  password: {
    value?: string | null;
    error?: string | null;
  };
};

export default function IniciarSesion() {
  const { state, actions } = useUserContext();
  const [error, setError] = useState(false);
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

  const handleEmailChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event): void => {
    const value = event.target.value;

    setForm({
      ...form,
      email: {
        value,
        error: !value.trim() ? CONTENT_TEXT.PAGE.EMAIL_REQUIRED : null,
      },
    });
  };

  const handlePasswordChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const value = event.target.value;

    setForm({
      ...form,
      password: {
        value,
        error: !value.trim() ? CONTENT_TEXT.PAGE.PASSWORD_REQUIRED : null,
      },
    });
  };

  const handleSubmit = async () => {
    if (form.email.value && form.password.value) {
      const result = await actions?.login(
        form.email.value,
        form.password.value
      );

      if (result) {
        redirect("/dependientes");
      } else {
        setError(true);
      }
    }
  };

  const handlerGoogleLogin = async () => {
    const result = await actions?.login("john@example.com", "example");

    if (result) {
      redirect("/dependientes");
    }
  };

  const isValid = !!(form.email.value?.trim() && form.password.value?.trim());

  return (
    <Container maxWidth="xs" sx={{ mt: "130px" }}>
      <Typography variant="h4" component="h1" sx={{ mb: "40px" }}>
        {CONTENT_TEXT.PAGE.LOGIN}
      </Typography>
      <Button
        startIcon={<GoogleBrand />}
        fullWidth
        loading={state?.loading}
        variant="official"
        onClick={handlerGoogleLogin}
      >
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
        label={CONTENT_TEXT.PAGE.EMAIL}
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
        label={CONTENT_TEXT.PAGE.PASSWORD}
        sx={{
          mb: "32px",
        }}
      />
      <Box display="flex" gap="8px">
        <Button
          loading={state?.loading}
          disabled={!isValid}
          variant="contained"
          onClick={handleSubmit}
        >
          {CONTENT_TEXT.PAGE.LOGIN}
        </Button>
        <Button>{CONTENT_TEXT.PAGE.FORGOT_PASSWORD}</Button>
      </Box>
      {error && (
        <Alert sx={{ mt: "32px" }} severity="error">
          {CONTENT_TEXT.PAGE.WRONG_EMAIL_OR_PASSWORD}
        </Alert>
      )}
    </Container>
  );
}
