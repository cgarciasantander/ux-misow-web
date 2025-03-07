import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

export default async function IniciarSesion() {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" sx={{mb: "24px"}} >
        Iniciar sesión
      </Typography>
      <Button fullWidth variant="contained">
        Iniciar sesión con Google
      </Button>
      <Divider textAlign="center">ó</Divider>
      <TextField
        fullWidth
        variant="outlined"
        label="Correo electrónico"
        margin="normal"
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Contraseña"
        margin="normal"
      />
      <Box display="flex" gap="8px">
        <Button disabled variant="contained">
          Iniciar sesión
        </Button>
        <Button>¿Olvido su contraseña?</Button>
      </Box>
    </Container>
  );
}
