import * as React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Box } from "@mui/material";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box minHeight="100vh" position="relative">
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
