import * as React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      minHeight="100vh"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar auth/>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex="1"
      >
        {children}
      </Box>
    </Box>
  );
}
