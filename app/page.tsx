import {
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { CONTENT_TEXT } from "./content";
import HeroHomeImg from '@/public/hero-home.png';
import Image from "next/image";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Card variant="outlined" sx={{ borderRadius: "12px" }}>
        <CardContent sx={{ padding: "48px" }}>
          <Grid2 container direction="row">
            <Grid2 size={5}>
              <Typography variant="h1" component="h1" sx={{ mb: "24px" }}>
                {CONTENT_TEXT.TITLE}
              </Typography>
              <Typography color="textSecondary" variant="h5" component="p" sx={{ mb: "24px" }}>
                {CONTENT_TEXT.SUBTITLE}
              </Typography>
              <Button variant="contained">
                Crear cuenta
              </Button>
            </Grid2>
            <Grid2 size={7}>
              <Image src={HeroHomeImg} alt="hero" style={{ height: "auto", width: "100%" }} />
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Container>
  );
}
