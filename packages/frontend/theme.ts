import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#5C5ADF",
      },
      color: {
        brand: {
          50: "#3D3A9E",
        },
      },
    }),
  },
});
