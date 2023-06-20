import { createStitches } from "@stitches/react";

const stitches = createStitches({
  theme: {
    radii: {
      m: "8px"
    },
    colors: {
      bgPrimary: "#000",
      bgSecondary: "#fff",
      textPrimary: "#fff",
      textSecondary: "#000"
    },
    fontSizes: {
      xs: "10px",
      s: "12px",
      m: "14px",
      l: "16px"
    },
    space: {
      xxs: "1px",
      xs: "2px",
      small: "4px",
      medium: "6px",
      large: "8px",
      xl: "12px",
      xxl: "16px"
    }
  }
});

export const { styled, theme, globalCss, keyframes, css, getCssText } = stitches;
