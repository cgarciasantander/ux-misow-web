"use client";
import * as React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Box } from "@mui/material";
import { useUserContext } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { state, actions } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    console.log(state);
    if(!state?.user) {
      router.push('/iniciar-sesion')
    }
  }, [router, state])

  const handleLogout = () => {
    actions?.logout();
  }

  return (
    <Box
      minHeight="100vh"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar auth onLogout={handleLogout}/>
      <Box
        display="flex"
        flexDirection="column"
        flex="1"
      >
        {children}
      </Box>
    </Box>
  );
}
