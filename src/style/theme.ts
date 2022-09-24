import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: (props: { [key: string]: unknown }) => ({
      body: {
        bg: mode("#FFF", "#000")(props),
      },
    }),
  },
});

export default theme;
