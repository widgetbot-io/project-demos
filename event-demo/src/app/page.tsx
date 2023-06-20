import Link from "next/link";
import * as Common from "@/components/common";
import * as Styles from "./styles";

export default function Home() {
  return (
    <Common.Container color="secondary">
      <Common.Header />
      <Styles.Box>
        <p>Page one</p>

        <Link href="/page-two">go to page two</Link>
      </Styles.Box>
      <Common.Stream>
        <Styles.Video>video</Styles.Video>
        <Styles.Chat>chat</Styles.Chat>
      </Common.Stream>
    </Common.Container>
  );
}
