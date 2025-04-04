import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { CONTENT_TEXT } from "./content";
import { AccountCircle, Logout } from "@mui/icons-material";
import { Logo } from "../logo/Logo";

type NavbarProps = {
  auth?: boolean;
  onLogout?: () => void;
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
            onClick={props.onLogout}
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
      <Toolbar
        variant="regular"
        sx={{ paddingTop: "32px", paddingBottom: "32px" }}
      >
        <ButtonBase
          href="/"
          disableRipple
          LinkComponent={Link}
          sx={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <Logo />
          <Typography variant="h6" color="inherit" component="div">
            ParentCheck
          </Typography>
        </ButtonBase>
        <Box flexGrow={1} justifyContent="end" display="flex" gap="8px">
          {renderButtons()}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
