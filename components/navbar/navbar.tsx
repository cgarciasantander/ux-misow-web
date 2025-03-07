import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export function Navbar() {
  return (
    <AppBar color="transparent" position="static" elevation={0}>
      <Toolbar variant="regular">
        <Typography variant="h6" color="inherit" component="div">
          ParentCheck
        </Typography>
        <Box flexGrow={1} justifyContent="end" display="flex" gap="16px">
            <Button variant="text" disableElevation>
                Iniciar sesión
            </Button>
            <Button variant="contained" disableElevation>
                Crear cuenta
            </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
