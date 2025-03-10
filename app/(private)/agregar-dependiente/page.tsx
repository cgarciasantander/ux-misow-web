"use client";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  InputLabel,
  Typography,
} from "@mui/material";
import { CONTENT_TEXT } from "./content";
import { ChangeEventHandler, useState } from "react";
import { TextField } from "@/components/field/TextField";
import { useUserContext } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { Add, Upload } from "@mui/icons-material";
import { AvatarField } from "@/components/field/AvatarField";

type FormValues = {
  name: {
    value?: string | null;
    error?: string | null;
  };
  birthDate: {
    value?: string | null;
    error?: string | null;
  };
  picture: {
    value?: File | null;
    error?: string | null;
  };
};

export default function AgregarDependiente() {
  const { state, actions } = useUserContext();
  const [error, setError] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState<FormValues>({
    name: {
      value: null,
      error: null,
    },
    birthDate: {
      value: null,
      error: null,
    },
    picture: {
      value: null,
      error: null,
    },
  });

  const handleNameChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event): void => {
    const value = event.target.value;

    setForm({
      ...form,
      name: {
        value,
        error: !value.trim() ? CONTENT_TEXT.PAGE.FULL_NAME_REQUIRED : null,
      },
    });
  };

  const handleBirthDateChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event): void => {
    const value = event.target.value;

    setForm({
      ...form,
      birthDate: {
        value,
        error: !value.trim() ? CONTENT_TEXT.PAGE.BIRTH_DATE_REQUIRED : null,
      },
    });
  };

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    const filelist = event.target.files;

    setForm({
      ...form,
      picture: {
        value: filelist?.item(0) ?? null,
        error: null,
      },
    });
  };

  const handleSubmit = async () => {
    // try {
    //   setError(false);
    //   await actions?.createUser({
    //     firstName: form.firstName.value as string,
    //     lastName: form.lastName.value as string,
    //     email: form.email.value as string,
    //     password: form.password.value as string,
    //   });
    //   router.push("/confirmar-correo");
    // } catch {
    //   setError(true);
    // }
  };

  const isValid = !!(
    form.name.value?.trim() &&
    form.birthDate.value?.trim() &&
    form.picture.value
  );

  return (
    <Container maxWidth="xs" sx={{ mt: "130px" }}>
      <Typography variant="h4" component="h1" sx={{ mb: "16px" }}>
        {CONTENT_TEXT.PAGE.ADD_DEPENDENT}
      </Typography>
      <Typography
        variant="body1"
        color="textDisabled"
        component="h1"
        sx={{ mb: "32px" }}
      >
        {CONTENT_TEXT.PAGE.INSTRUCTIONS}
      </Typography>
      <AvatarField value={form.picture.value} onChange={handleFileChange} />
      <TextField
        fullWidth
        required
        value={form.name.value}
        error={!!form.name.error}
        helperText={form.name.error ?? null}
        onChange={handleNameChange}
        type="text"
        variant="outlined"
        label={CONTENT_TEXT.PAGE.FULL_NAME}
        sx={{
          mb: "32px",
        }}
      />
      <TextField
        fullWidth
        required
        placeholder="dd/mm/yyyy"
        error={!!form.birthDate.error}
        helperText={form.birthDate.error ?? null}
        onChange={handleBirthDateChange}
        type="date"
        variant="outlined"
        label={CONTENT_TEXT.PAGE.BIRTH_DATE}
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
          startIcon={<Add />}
        >
          {CONTENT_TEXT.PAGE.ADD_DEPENDENT}
        </Button>
      </Box>
      {error && (
        <Alert sx={{ mt: "32px" }} severity="error">
          El correo electrónico ya se encuentra registrado.
        </Alert>
      )}
    </Container>
  );
}
