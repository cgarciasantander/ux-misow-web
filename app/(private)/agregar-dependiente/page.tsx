"use client";
import {
  Alert,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { CONTENT_TEXT } from "./content";
import { ChangeEventHandler, useState } from "react";
import { TextField } from "@/components/field/TextField";
import { useUserContext } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { Add } from "@mui/icons-material";
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
    console.log(value);
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
    try {
      setError(false);
      await actions?.createDependent({
        name: form.name.value as string,
        birthDate: form.birthDate.value as string,
        picture: form.picture.value ? await toBase64(form.picture.value as File) : undefined,
      });

      router.push("/dependientes");
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  const isValid = !!(form.name.value?.trim() && form.birthDate.value?.trim());

  return (
    <>
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
      <AvatarField
        stringAvatar={form.name.value?.at(0)}
        onChange={handleFileChange}
      />
      <TextField
        fullWidth
        required
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
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
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
          Ya existe un dependiente con el mismo nombre y fecha de nacimiento.
        </Alert>
      )}
    </>
  );
}

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
