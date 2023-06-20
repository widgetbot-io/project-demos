import { styled, theme } from "@/stitches";

export const Container = styled("div", {
  margin: "0 auto",
  variants: {
    color: {
      primary: {
        backgroundColor: theme.colors.bgPrimary,
        color: theme.colors.textPrimary
      },
      secondary: {
        backgroundColor: theme.colors.bgSecondary,
        color: theme.colors.textSecondary
      }
    }
  }
});
