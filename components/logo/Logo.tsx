import Image from "next/image";
import LogoImg from "@/public/logo.png";

export function Logo() {
  return <Image src={LogoImg} width={48} height={48} alt="parentcheck-logo" />;
}
