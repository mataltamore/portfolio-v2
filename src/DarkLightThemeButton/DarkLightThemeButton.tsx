import { Button, useColorMode } from "@chakra-ui/react";

function DarkLightThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
}

export default DarkLightThemeButton;
