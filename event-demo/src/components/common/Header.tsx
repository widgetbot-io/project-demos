import { styled, theme } from "@/stitches";
import { Container } from "./Container";

const Logo = styled("div", {
  display: "inline-block",
  "& img": {
    display: "inline-block",
    width: "2.2rem",
    height: "2.2rem",
    verticalAlign: "top",
    marginRight: "0.8rem"
  },
  "& a": {
    color: "#f2f2f2",
    fontSize: "1.2rem",
    position: "relative",
    textDecoration: "none"
  }
});

const Items = styled("div", {
  flexGrow: "1",
  display: "inline",
  justifyContent: "flex-end",
  marginLeft: "1.5rem",
  borderLeft: "1px solid #5865f2",
  "& a": {
    color: "#f2f2f2",
    fontSize: "1.2rem",
    position: "relative",
    textDecoration: "none",
    marginLeft: "1.5rem"
  }
});

const TopNav = styled("div", {
  overflow: "hidden",
  backgroundColor: "#333",
  lineHeight: "2.5rem",
  padding: ".7rem 1.5rem",
  boxSizing: "border-box",
  borderBottom: "1px solid #5865f2",

  "& span": {
    display: "inline-block"
  }
});

export function Header() {
  return (
    <Container>
      <TopNav>
        <Logo>
          <a href="/">
            <img src="widgetbot.svg" />
            <span>WidgetBot Demos</span>
          </a>
        </Logo>
        <Items>
          <a href="https://docs.widgetbot.io">Home</a>
          <a href="/">Event Demo</a>
        </Items>
      </TopNav>
    </Container>
  );
}
