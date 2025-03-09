import { Box, Button, Container, Typography } from "@mui/material";
import DependientesInicialImg from "@/public/dependientes-inicial.png";
import Image from "next/image";
import { Add } from "@mui/icons-material";

export default async function Dependientes() {
  const children = [];

  if (!children.length) {
    return (
      <Container maxWidth="xs" sx={{ mt: "130px" }}>
        <Box textAlign="center">
          <Box sx={{ mb: "32px" }}>
            <Image
              src={DependientesInicialImg}
              alt="Dependientes"
              width={370}
            />
          </Box>
          <Typography sx={{ mb: "32px" }} variant="h4" component="h1">
            Comienza creando una lista de dependientes
          </Typography>
          <Button startIcon={<Add />} variant="contained">
            Agregar dependiente
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <h1>Title</h1>
    </Container>
  );
}
