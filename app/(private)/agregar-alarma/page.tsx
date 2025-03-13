import {
  Container,
  Stack,
  Typography,
  Box
} from "@mui/material";

import Image from "next/image";

import QRImg from "@/public/qr_image.png"
import { CONTENT_TEXT } from "./content";

const DownloadCard = function ({ title }) {
  return (
    <Container sx={{minWidth: "239px", border:  '1px solid #BFC8CC', borderRadius: "12px", minHeight: "300px", backgroundColor: "#F5FAFD", pl: "5px" }}>
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
        <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between",  alignItems: "center"}}>
          <DownloadCard title="Android"/>
          <DownloadCard title="IOS"/>
        </Stack>
        <Typography sx={{ mt: "15px", color: "black", fontSize: "16px", fontWeight: 400, lineHeight: 2 }}>
          2. Inicia sesión con tu cuenta de ParentCheck. <br />
          3. Crea una alarma desde la lista de recordatorios. <br />
          4. Listo, todas tus alarmas se sincronizaran aquí en nuestra aplicación web.
        </Typography>
      </Container>
    );
  }


