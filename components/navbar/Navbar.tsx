import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { CONTENT_TEXT } from "./content";
import { AccountCircle, Logout } from "@mui/icons-material";

type NavbarProps = {
  auth?: boolean;
};

export function Navbar(props: NavbarProps) {
  function renderButtons() {
    if (props.auth) {
      return (
        <>
          <Button
            variant="text"
            startIcon={<AccountCircle />}
            LinkComponent={Link}
            href="/cuenta"
          >
            {CONTENT_TEXT.MY_ACCOUNT}
          </Button>
          <Button
            variant="text"
            startIcon={<Logout />}
            LinkComponent={Link}
            href="/"
          >
            {CONTENT_TEXT.LOG_OUT}
          </Button>
        </>
      );
    }

    return (
      <>
        <Button variant="text" LinkComponent={Link} href="/iniciar-sesion">
          {CONTENT_TEXT.LOGIN}
        </Button>
        <Button variant="contained" LinkComponent={Link} href="/crear-cuenta">
          {CONTENT_TEXT.SIGN_UP}
        </Button>
      </>
    );
  }

  return (
    <AppBar color="transparent" position="static" elevation={0}>
      <Toolbar variant="regular">
        <Typography variant="h6" color="inherit" component="div">
          ParentCheck
        </Typography>
        <Box flexGrow={1} justifyContent="end" display="flex" gap="16px">
          {renderButtons()}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
