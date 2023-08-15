import { styled, theme } from "@stitches";

export const Video = styled("div", {
  flexGrow: 5,
  minHeight: "80vh",

  iframe: {
    borderRadius: "7px"
  }
});

export const Chat = styled("div", {
  flexGrow: 1,
  maxWidth: "519px",
  minWidth: "519px"
});

export const Stream = styled("div", {
  display: "flex",
  flexGrow: 6,
  gap: "10px"
});
