import Link from "next/link";
import * as Common from "@/components/common";
import * as Styles from "./styles";

export default function Home() {
  return (
    <Common.Container color="secondary">
      <Styles.Box>
        <p>Page two</p>

        <Link href="/">go back to page one</Link>
      </Styles.Box>
    </Common.Container>
  );
}
