import { ChakraProvider, extendTheme, ColorModeScript, type ThemeConfig } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Botões
// Padrão:  #d13639
// Hover: #bc252a

// Input
// Padrão: #ededed
// Hover: #e7e7e7
// Focus: #f9f9f9

// Background: #f9f9f9

const colors = {
  interactable: {
    900: "#a81318",
    800: "#bc252a",
    700: "#c73033",
    600: "#d13639",
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors, components: { Button: { baseStyle: { _focus: { boxShadow: "none" } } } } });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
