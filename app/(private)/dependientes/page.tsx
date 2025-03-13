"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import DependientesInicialImg from "@/public/dependientes-inicial.png";
import Image from "next/image";
import { Add } from "@mui/icons-material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import PauseIcon from '@mui/icons-material/Pause';
import { CONTENT_TEXT } from "./content";
import Link from "next/link";
import { useUserContext } from "@/hooks/useUser";

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
  title: string,
  subtitle: string,
  dosis: string,
) {
  return { title, subtitle, dosis };
}

const rows = [
  createData(
    'Tylenol 500mg cada 8 horas durante 5 días', 
    'Fecha de inicio 01/01/2025 09:00 PM - Fecha de finalización 05/01/2025 09:00 PM', 
    '1/15 dosis'
  ),
  createData(
    'Ibuprofeno 500mg cada 8 horas durante 5 días', 
    'Fecha de inicio 01/01/2025 09:00 PM - Fecha de finalización 05/01/2025 09:00 PM',
    '1/15 dosis'
  ),
];


export default function Dependientes() {
  const { state } = useUserContext();
  console.log(state?.user?.dependents);
  if (state?.user?.dependents.length) {
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
          <Button
            startIcon={<Add />}
            variant="contained"
            LinkComponent={Link}
            href="/agregar-dependiente"
          >
            {CONTENT_TEXT.PAGE.ADD_CHILD}
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex", gap: "8px", mb: "25px" }}>
        <Typography variant="h4" component="h1" sx={{ mb: "16px" }}>
          {CONTENT_TEXT.PAGE.MY_DEPENDENT}
        </Typography>
        <Container>
          <Button  
            LinkComponent={Link}
            href="/agregar-dependiente" 
            disabled={false} 
            variant="outlined"             
            startIcon={<Add />}>
            {CONTENT_TEXT.PAGE.ADD_CHILD}
          </Button>
        </Container>
      </Box>
      
      <BasicTable></BasicTable>
    </Container>
  );
}

function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, backgroundColor: "#F5FAFD" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-start",  alignItems: "center", fontWeight: 400, color: "#171C1F", fontSize: "16px" }}>
                <Avatar>JD</Avatar>
                <p>John Doe, 5 años</p>
              </Stack>
            </TableCell>
            <TableCell sx={{ color: "#08677F", fontWeight: 500 }} align="right">
              <Button 
                variant="text"  
                startIcon={<NotificationsNoneIcon />}  
                LinkComponent={Link}
                href="/agregar-alarma">
                  Agregar Alarma
              </Button>               
            </TableCell>
            <TableCell sx={{ color: "#08677F", fontWeight: 500,  width: 240 }} align="right">
              <Button variant="text"  startIcon={<FileUploadOutlinedIcon />}>Importar prescripción</Button>
            </TableCell>
            <TableCell sx={{ color: "#08677F", fontWeight: 500,  width: 240 }} align="right">
              <Button variant="text"  startIcon={<TimelineOutlinedIcon />} disabled>Historial de dosis</Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <Stack direction="column" spacing={0.5}>
                  <p style={{ color: "#08677F", fontWeight: 400, fontSize: '16px'}}>{row.title}</p>
                  <p style={{ color: "#455E91", fontWeight: 400, fontSize: '14px'}}>{row.subtitle}</p>
                </Stack>
              </TableCell>
              <TableCell rowSpan={1} />
              <TableCell align="right" sx={{ color: "black", fontWeight: 500,  width: 240 }}>{row.dosis}</TableCell>
              <TableCell align="right" sx={{ color: "#08677F",  width: 240 }} >
                <Button
                  startIcon={<PauseIcon />}
                  variant="contained"
                >
                  {CONTENT_TEXT.PAGE.STOP_DOSIS}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}