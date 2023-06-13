import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch.tsx";

export function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"} >
      <Image src={logo} boxSize={"60px"}></Image>
      <ColorModeSwitch />
    </HStack>
  );
}
