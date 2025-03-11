import * as React from "react";
import { Box, Breadcrumbs, Button, Container } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";

export default function AgregarDependienteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box>
      <Container maxWidth="xl" disableGutters>
        <Breadcrumbs>
          <Button
            startIcon={<ArrowBack />}
            href="/dependientes"
            LinkComponent={Link}
          >
            Regresar
          </Button>
          <Button disabled>Agregar dependiente</Button>
        </Breadcrumbs>
      </Container>
      <Container maxWidth="xs" sx={{ mt: "66px" }}>
      {children}
      </Container>
    </Box>
  );
}
