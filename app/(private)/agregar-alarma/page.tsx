"use client";
import { Stack, Typography, Box, Card, CardContent, Link, Button } from "@mui/material";

import Image, { StaticImageData } from "next/image";

import QRImg from "@/public/qr_image.png";
import DownloadAndroidImg from "@/public/google_play_download.png";
import DownloadIOSImg from "@/public/app_store_download.svg";
import { CONTENT_TEXT } from "./content";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const DownloadCard = function ({
  title,
  downloadImage,
  store,
}: {
  title: string;
  store: string;
  downloadImage: StaticImageData;
}) {
  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: "12px", backgroundColor: "#F5FAFD" }}
    >
      <CardContent>
        <Typography variant="body2" sx={{ mb: "8px", fontWeight: 500 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          fontSize="12px"
          sx={{ mb: "24px", fontWeight: 400 }}
        >
          Escanea el código QR o descarga la aplicación en {store}.
        </Typography>
        <Stack direction="column" spacing="16px" alignItems="center">
          <Box
            sx={{
              height: "136px",
              width: "136px",
              backgroundColor: "white",
              border: (theme) => `solid 1px ${theme.palette.divider}`,
            }}
          >
            <Image src={QRImg} alt="hero" width={136} height={136} />
          </Box>
          <Link href="https://google.com">
            <Image src={downloadImage} alt="hero" height={40} />
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default function AddAlarm() {
  const router = useRouter();
  
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ mb: "16px" }}>
        {CONTENT_TEXT.PAGE.ADD_ALARM}
      </Typography>
      <Typography
        variant="body1"
        color="textDisabled"
        component="h1"
        sx={{ mb: "32px" }}
      >
        {CONTENT_TEXT.PAGE.INSTRUCTIONS}
      </Typography>

      <Typography
        sx={{ mb: "24px", fontWeight: 400 }}
      >
        1. Descarga la aplicación movil desde tu celular.
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "space-between", alignItems: "stretch" }}
      >
        <DownloadCard
          title="Android"
          store="Google Play Store"
          downloadImage={DownloadAndroidImg}
        />
        <DownloadCard
          title="iOS"
          store="Apple App Store"
          downloadImage={DownloadIOSImg}
        />
      </Stack>
      <Typography sx={{ mt: "15px", mb: "24px", fontWeight: 400 }}>
        2. Inicia sesión con tu cuenta de ParentCheck.
      </Typography>
      <Typography sx={{ mb: "24px", fontWeight: 400 }}>
        3. Crea una alarma desde la lista de recordatorios.
      </Typography>
      <Typography sx={{ mb: "24px", fontWeight: 400 }}>
        4. Listo, todas tus alarmas se sincronizaran aquí en nuestra aplicación
        web.
      </Typography>
      <Button variant="contained" startIcon={<ArrowBack />} onClick={() => router.back()}>Regresar</Button>
    </>
  );
}
