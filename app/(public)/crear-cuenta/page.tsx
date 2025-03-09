"use client";
import { GoogleBrand } from "@/components/icons/GoogleBrand";
import { Alert, Box, Button, Container, Divider, Typography } from "@mui/material";
import { CONTENT_TEXT } from "./content";
import { ChangeEventHandler, useState } from "react";
import { PasswordField } from "@/components/field/PasswordField";
import { TextField } from "@/components/field/TextField";
import Link from "next/link";
import { useUserContext } from "@/hooks/useUser";
import { redirect } from "next/navigation";

type FormValues = {
  firstName: {
    value?: string | null;
    error?: string | null;
  };
  lastName: {
    value?: string | null;
    error?: string | null;
  };
  email: {
    value?: string | null;
    error?: string | null;
  };
  password: {
    value?: string | null;
    error?: string | null;
  };
};

export default function CrearCuenta() {
  const { state, actions } = useUserContext();
  const [error, setError] = useState(false);
  const [form, setForm] = useState<FormValues>({
    firstName: {
      value: null,
      error: null,
    },
    lastName: {
      value: null,
      error: null,
    },
    email: {
      value: null,
      error: null,
    },
    password: {
      value: null,
      error: null,
    },
  });

  const handleFirstNameChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event): void => {
    const value = event.target.value;

    setForm({
      ...form,
      firstName: {
        value,
        error: !value.trim() ? CONTENT_TEXT.PAGE.FIRST_NAME_REQUIRED : null,
      },
    });
  };

  const handleLastNameChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event): void => {
    const value = event.target.value;

    setForm({
      ...form,
      lastName: {
        value,
        error: !value.trim() ? CONTENT_TEXT.PAGE.LAST_NAME_REQUIRED : null,
      },
    });
  };

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
    try {
      await actions?.createUser({
        firstName: form.firstName.value as string,
        lastName: form.lastName.value as string,
        email: form.email.value as string,
        password: form.password.value as string,
      });

      redirect('/iniciar-sesion');
    } catch {
      setError(true);
    }
  }

  const isValid = !!(
    form.firstName.value?.trim() &&
    form.lastName.value?.trim() &&
    form.email.value?.trim() &&
    form.password.value?.trim()
  );

  return (
    <Container maxWidth="xs" sx={{ mt: "130px" }}>
      <Typography variant="h4" component="h1" sx={{ mb: "40px" }}>
        {CONTENT_TEXT.PAGE.CREATE_ACCOUNT}
      </Typography>
      <Button
        startIcon={<GoogleBrand />}
        fullWidth
        variant="official"
        href="/dependientes"
        LinkComponent={Link}
      >
        {CONTENT_TEXT.PAGE.CREATE_ACCOUNT_WITH_GOOGLE}
      </Button>
      <Divider textAlign="center" sx={{ mb: "24px", mt: "24px" }}>
        {CONTENT_TEXT.PAGE.OR}
      </Divider>
      <Box display="flex" gap="16px" mb="32px">
        <TextField
          fullWidth
          required
          error={!!form.firstName.error}
          helperText={form.firstName.error ?? null}
          onChange={handleFirstNameChange}
          type="text"
          variant="outlined"
          label={CONTENT_TEXT.PAGE.FIRST_NAME}
        />
        <TextField
          fullWidth
          required
          error={!!form.lastName.error}
          helperText={form.lastName.error ?? null}
          onChange={handleLastNameChange}
          type="text"
          variant="outlined"
          label={CONTENT_TEXT.PAGE.LAST_NAME}
        />
      </Box>
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
          onClick={handleSubmit}
          disabled={!isValid}
          variant="contained"
        >
          {CONTENT_TEXT.PAGE.CREATE_ACCOUNT}
        </Button>
      </Box>
      {
        error && (
          <Alert sx={{ mt: "32px" }} severity="error">
            El correo electrónico ya se encuentra registrado. 
          </Alert>
        )
      }
    </Container>
  );
}
