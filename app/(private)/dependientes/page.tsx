"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import DependientesInicialImg from "@/public/dependientes-inicial.png";
import Image from "next/image";
import { Add } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PauseIcon from "@mui/icons-material/Pause";
import { CONTENT_TEXT } from "./content";
import Link from "next/link";
import { useUserContext } from "@/hooks/useUser";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(title: string, subtitle: string, dosis: string) {
  return { title, subtitle, dosis };
}

const rows = [
  createData(
    "Tylenol 500mg cada 8 horas durante 5 días",
    "Fecha de inicio 01/01/2025 09:00 PM - Fecha de finalización 05/01/2025 09:00 PM",
    "1/15 dosis"
  ),
  createData(
    "Ibuprofeno 500mg cada 8 horas durante 5 días",
    "Fecha de inicio 01/01/2025 09:00 PM - Fecha de finalización 05/01/2025 09:00 PM",
    "1/15 dosis"
  ),
];

export default function Dependientes() {
  const { state } = useUserContext();

  if (!state?.user?.dependents.length) {
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
    <Container maxWidth="xl" sx={{ mt: "130px" }}>
      <Stack direction="row" spacing="24px" alignContent="center" sx={{ mb: "24px" }}>
        <Typography variant="h4" component="h1">
          {CONTENT_TEXT.PAGE.MY_DEPENDENT}
        </Typography>
        <Button
          LinkComponent={Link}
          href="/agregar-dependiente"
          variant="outlined"
          startIcon={<Add />}
        >
          {CONTENT_TEXT.PAGE.ADD_CHILD}
        </Button>
      </Stack>
      {state.user.dependents.map((dependent, idx) => (
        <BasicTable
          key={idx}
          name={dependent.name}
          birthDate={dependent.birthDate}
          picture={dependent.picture}
        />
      ))}
    </Container>
  );
}

type BasicTableProps = {
  name: string;
  birthDate: string;
  picture?: string;
};

function BasicTable(props: BasicTableProps) {
  const age =
    new Date().getFullYear() - new Date(props.birthDate).getFullYear();

  return (
    <TableContainer component={Paper} sx={{ marginBottom: "24px" }}>
      <Table
        sx={{ backgroundColor: "#F5FAFD" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing="16px" alignItems="center">
                  <Avatar
                    src={props.picture}
                    sx={{
                      bgcolor: "#B8EAFF",
                      color: (theme) => theme.palette.primary.dark,
                    }}
                  >
                    {props.name.at(0)}
                  </Avatar>
                  <Typography>
                    {props.name}, {age} {age === 1 ? "año" : "años"}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing="16px">
                  <Button
                    variant="text"
                    startIcon={<NotificationsNoneIcon />}
                    LinkComponent={Link}
                    href="/agregar-alarma"
                  >
                    Agregar Alarma
                  </Button>
                  <Button variant="text" startIcon={<FileUploadOutlinedIcon />}>
                    Importar prescripción
                  </Button>
                  <Button
                    variant="text"
                    startIcon={<TimelineOutlinedIcon />}
                    disabled
                  >
                    Historial de dosis
                  </Button>
                </Stack>
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <div>
                    <Typography variant="body1" color="primary">
                      {row.title}
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      {row.subtitle}
                    </Typography>
                  </div>
                  <Stack direction="row" spacing="24px" alignItems="center">
                    <Typography variant="body2">
                      <strong>{row.dosis}</strong>
                    </Typography>
                    <Button startIcon={<PauseIcon />} variant="contained">
                      {CONTENT_TEXT.PAGE.STOP_DOSIS}
                    </Button>
                  </Stack>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
