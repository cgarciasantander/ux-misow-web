"use client";
import {
  Box,
  Button,
  Card,
  Container,
  Grid2,
  Theme,
  Typography,
} from "@mui/material";
import { CONTENT_TEXT } from "./content";
import HeroHomeImg from "@/public/hero-home.png";
import Image from "next/image";
import { Capsule } from "@/components/icons/Capsule";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import Link from "next/link";

export default function RootPage() {
  return (
    <Box
      minHeight="100vh"
      sx={{
        backgroundColor: "#F5FAFD",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex="1"
      >
        <Container maxWidth="xl">
          <Card variant="outlined" sx={{ borderRadius: "12px" }}>
            <Grid2 container direction="row">
              <Grid2 size={5} sx={{ padding: "48px" }}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: "5em",
                    mb: "24px",
                    fontWeight: (theme: Theme) => theme.typography.fontWeightRegular,
                  }}
                >
                  {CONTENT_TEXT.PAGE.TITLE}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="h5"
                  component="p"
                  sx={{ mb: "24px" }}
                >
                  {CONTENT_TEXT.PAGE.SUBTITLE}
                </Typography>
                <Button
                  LinkComponent={Link}
                  href="/crear-cuenta"
                  variant="contained"
                  startIcon={<Capsule />}
                >
                  {CONTENT_TEXT.PAGE.SIGN_UP}
                </Button>
              </Grid2>
              <Grid2 size={7}>
                <Box display="flex" flexDirection="column" justifyContent="end">
                  <Image
                    src={HeroHomeImg}
                    alt="hero"
                    style={{ height: "auto", width: "100%" }}
                  />
                </Box>
              </Grid2>
            </Grid2>
          </Card>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
}
