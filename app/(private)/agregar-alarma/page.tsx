import {
  Container,
  Stack,
  Typography,
  Box
} from "@mui/material";

import Image from "next/image";

import QRImg from "@/public/qr_image.png"
import DownloadAndroidImg from "@/public/google_play_download.png"
import DownloadIOSImg from "@/public/app_store_download.png"
import { CONTENT_TEXT } from "./content";

const DownloadCard = function ({ title, downloadImage }) {
  return (
    <Container sx={{minWidth: "239px", border:  '1px solid #BFC8CC', borderRadius: "12px", backgroundColor: "#F5FAFD", pl: "5px" }}>
      <Typography variant="subtitle1"  sx={{ mt: "10px", color: "black", fontSize: "14px", fontWeight: 500 }}>
        {title}
      </Typography>
      <Typography sx={{ mt: "10px", color: "black", fontSize: "12px", fontWeight: 400 }}>
        Escanea el código QR o descarga la aplicación en Apple App Store.
      </Typography>
      <Box>
      <Image
        src={QRImg}
        alt="hero"
        style={{ height: "auto", width: "100%" }}
      />
      <Box sx={{  }}>
        <Image
          src={downloadImage}
          alt="hero"
          style={{ height: "auto", width: "100%" }}
        />
      </Box>
      </Box>
    </Container>
  )
}

export default async function AddAlarm() {

    return (
      <Container maxWidth="xl">
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

        <Typography sx={{ mb: "15px", color: "black", fontSize: "16px", fontWeight: 400 }}>
          1. Descarga la aplicación movil desde tu celular.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between",  alignItems: "stretch"}}>
          <DownloadCard title="Android" downloadImage={DownloadAndroidImg}/>
          <DownloadCard title="IOS" downloadImage={DownloadIOSImg}/>
        </Stack>
        <Typography sx={{ mt: "15px", color: "black", fontSize: "16px", fontWeight: 400}}>
          2. Inicia sesión con tu cuenta de ParentCheck.
        </Typography>
        <Typography sx={{color: "black", fontSize: "16px", fontWeight: 400 }}>
          3. Crea una alarma desde la lista de recordatorios.
        </Typography>
        <Typography sx={{color: "black", fontSize: "16px", fontWeight: 400 }}>
          4. Listo, todas tus alarmas se sincronizaran aquí en nuestra aplicación web.
        </Typography>
      </Container>
    );
  }


