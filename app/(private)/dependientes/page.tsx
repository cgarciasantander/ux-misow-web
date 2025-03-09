import { Box, Button, Container, Typography } from "@mui/material";
import DependientesInicialImg from "@/public/dependientes-inicial.png";
import Image from "next/image";
import { Add } from "@mui/icons-material";
import { CONTENT_TEXT } from "./content";

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
            {CONTENT_TEXT.PAGE.START_ADDING_CHILDREN}
          </Typography>
          <Button startIcon={<Add />} variant="contained">
            {CONTENT_TEXT.PAGE.ADD_CHILD}
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
