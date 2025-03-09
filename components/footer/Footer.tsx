import { Box, Button, Container, Typography } from "@mui/material";

export function Footer() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box paddingTop="20px" paddingBottom="20px" display="flex" gap="4px" alignItems="center">
        <Button>Inicio</Button>
        <Typography color="primary" component="span">•</Typography>
        <Button>Nosotros</Button>
        <Typography color="primary" component="span">•</Typography>
        <Button>Preguntas frecuentes</Button>
        <Typography color="primary" component="span">•</Typography>
        <Button>Soporte</Button>
      </Box>
    </Container>
  );
}
