import * as React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box minHeight="100vh" position="relative">
      <Navbar auth />
      {children}
    </Box>
  );
}
