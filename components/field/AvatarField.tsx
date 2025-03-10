import { MouseEvent } from "react";
import { Upload } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  InputLabel,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";

const VALID_MIMETYPES = ["image/jpeg", "image/png", "image/gif"];

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
  stringAvatar?: string | null;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export function AvatarField(props: AvatarFieldProps) {
  const [previewSrc, setPreviewSrc] = useState<string | undefined>();
  const ref = useRef<HTMLInputElement | null>(null);
  const file = ref.current?.files?.item(0);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", (event) => {
        const path = event.target?.result;

        if (path && typeof path === "string") {
          setPreviewSrc(path);
        }
      });
      reader.readAsDataURL(file);
    } else {
      setPreviewSrc(undefined);
    }
  }, [file]);

  const removeFile = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (ref.current?.files) {
      ref.current.files = new DataTransfer().files;
      const synthetic = new Event("change", { bubbles: true });
      ref.current.dispatchEvent(synthetic);
    }
  };

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
        <Box display="flex" gap="16px" alignItems="center">
          <Avatar
            sx={{
              width: "72px",
              height: "72px",
              bgcolor: "#B8EAFF",
              color: (theme) => theme.palette.primary.dark,
            }}
            src={previewSrc}
          >
            {props.stringAvatar}
          </Avatar>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              gap: "8px",
              overflow: "hidden",
            }}
          >
            <InputLabel
              sx={{
                fontWeight: (theme) => theme.typography.fontWeightBold,
              }}
            >
              Imagen de perfil
            </InputLabel>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                startIcon={<Upload />}
              >
                Seleccionar
                <VisuallyHiddenInput
                  ref={ref}
                  type="file"
                  onChange={props.onChange}
                  accept={VALID_MIMETYPES.join(",")}
                />
              </Button>
              <Button onClick={removeFile} disabled={!file} variant="outlined">
                Eliminar
              </Button>
            </Box>
            {file && (
              <Tooltip title={file.name}>
                <Typography
                  sx={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden"
                  }}
                  component="div"
                  variant="caption"
                >
                  {file.name}
                </Typography>
              </Tooltip>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
