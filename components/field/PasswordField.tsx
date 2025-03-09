import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";

export function PasswordField(props: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        },
        htmlInput: {
          sx: {
            "::-ms-reveal": {
              display: "none",
            },
            "::-ms-clear": {
              display: "none",
            },
          },
        },
        ...props.slotProps,
      }}
      {...props}
    />
  );
}
