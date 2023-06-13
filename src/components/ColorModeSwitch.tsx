import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { BsLightbulb, BsLightbulbOff } from "react-icons/bs";

export function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme={"green"}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />

      {colorMode === "dark" && (
        <Icon width={6} height={6} as={BsLightbulbOff}></Icon>
      )}
      {colorMode === "light" && (
        <Icon width={6} height={6} as={BsLightbulb}></Icon>
      )}
    </HStack>
  );
}
