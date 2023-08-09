import { styled, theme } from "@stitches";

const Container = styled("div", {
  display: "flex",
  flexGrow: 2,
  height: "6vh",
  width: "auto",
  marginTop: "3vh",
  padding: "1vh",
  borderTop: "1px solid #5865f2",
  backgroundColor: "#333",
  borderRadius: "1rem",
  fontWeight: "bold"
});

const ControlsContainer = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1vh",
  flexGrow: 1
});

const LinksContainer = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "1vh",
  flexGrow: 1
});

const Button = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "1rem",
  border: "none",
  backgroundColor: "#5865f2",
  color: "#f2f2f2",
  width: "5vh",
  height: "5vh"
});

const Link = styled("a", {
  borderRadius: "1rem",
  border: "none",
  backgroundColor: "#5865f2",
  color: "#f2f2f2",
  textDecoration: "none",
  width: "5vw",
  height: "5vh",
  textAlign: "center",
  lineHeight: "5vh"
});

const Avatar = styled("img", {
  borderRadius: "50%",
  border: "2px solid #5865f2",
  width: "5vh",
  height: "5vh"
});

const Handle = styled("a", {
  color: "#5865f2",
  textDecoration: "none",
  fontWeight: "bold"
});

export function Controls() {
  return (
    <Container>
      <ControlsContainer>
        <Button>
          <span className="material-symbols-outlined">skip_previous</span>
        </Button>
        <Button>
          <span className="material-symbols-outlined">skip_next</span>
        </Button>
        <Avatar src="man1.jpg" />
        <Avatar src="girl1.webp" />
        Welcome to the event!
        <Handle href="https://twitter.com">@john</Handle>
        <Handle href="https://twitter.com">@sarah</Handle>
      </ControlsContainer>
      <LinksContainer>
        <Link href="https://widgetbot.io">Share</Link>
        <Link href="https://discord.com">Discord</Link>
      </LinksContainer>
    </Container>
  );
}
