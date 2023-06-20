import { styled, theme } from "@/stitches";
import { Container } from "./Container";

const Logo = styled("div", {
  flexGrow: "1"
});
const Items = styled("div", {
  flexGrow: "1",
  display: "flex",
  justifyContent: "space-between",
});

export function Header() {
  return (
    <Container css={{ display: "flex", flexGrow: 2, justifyContent: "space-between" }}>
      <Logo>logo</Logo>
      <Items>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Items>
    </Container>
  );
}
