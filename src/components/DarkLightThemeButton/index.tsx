import react from "react";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function DarkLightThemeButton() {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Toggle color theme"
      icon={react.createElement(icon)}
    />
  );
}

export default DarkLightThemeButton;
