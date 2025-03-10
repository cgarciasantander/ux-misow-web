import { Upload } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardContent, InputLabel, styled } from "@mui/material";
import { ChangeEventHandler, useEffect, useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

type AvatarFieldProps = {
  value?: File | null;
  onChange: ChangeEventHandler<HTMLInputElement>
};

export function AvatarField(props: AvatarFieldProps) {
  const [previewSrc, setPreviewSrc] = useState<string>();

  useEffect(() => {
    if (props.value) {
      const reader = new FileReader();
      
      reader.addEventListener("load", (event) => {
        const path = event.target?.result;

        if (path && typeof path === "string") {
          setPreviewSrc(path);
        }
      });    
      reader.readAsDataURL(props.value);
    }
  }, [props.value]);

  const deleteFile = () => {
    
  }

  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{
        mb: "32px",
        borderRadius: "12px",
        backgroundColor: "#F5FAFD",
      }}
    >
      <CardContent>
        <Box display="flex" gap="16px">
          <Avatar sx={{ width: "67px", height: "67px" }} src={previewSrc} />
          <Box>
            <InputLabel sx={{ mb: "8px" }}>Imagen de perfil</InputLabel>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              startIcon={<Upload />}
              sx={{ mr: "8px" }}
            >
              Seleccionar
              <VisuallyHiddenInput type="file" onChange={props.onChange} />
            </Button>
            <Button disabled={!props.value} variant="outlined">
              Eliminar
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
