import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { CONTENT_TEXT } from "./content";

export function Navbar() {
  return (
    <AppBar color="transparent" position="static" elevation={0}>
      <Toolbar variant="regular">
        <Typography variant="h6" color="inherit" component="div">
          ParentCheck
        </Typography>
        <Box flexGrow={1} justifyContent="end" display="flex" gap="16px">
            <Button variant="text" disableElevation LinkComponent={Link} href="/iniciar-sesion">
                {CONTENT_TEXT.LOGIN}
            </Button>
            <Button variant="contained" disableElevation>
                {CONTENT_TEXT.SIGN_UP}
            </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
