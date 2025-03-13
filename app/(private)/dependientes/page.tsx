"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import DependientesInicialImg from "@/public/dependientes-inicial.png";
import Image from "next/image";
import { Add } from "@mui/icons-material";
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
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
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
      <Box sx={{ display: "flex", gap: "8px", marginBotton: "100" }}>
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
            Agregar dependiente
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
              <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-start",  alignItems: "center", }}>
                <Avatar>JD</Avatar>
                <p>John Doe, 5 años</p> 
              </Stack>
            </TableCell>
            <TableCell align="right">Agregar Alarma</TableCell>
            <TableCell align="right">Importar prescripción</TableCell>
            <TableCell align="right">Historial de dosis</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}