import { styled, theme } from "@/stitches";
import { chapters } from "@/data/chapters.json";
import { getTime } from "@/utils/getTime";

export const Timestamp = styled("span", {
  color: "#0000FF"
});

export function Timeline() {
  return (
    <div>
      {chapters.map((chapter, index) => (
        <div key={index}>
          <h2>{chapter.title}</h2>
          <Timestamp>{getTime(chapter.start)}</Timestamp> -{" "}
          <Timestamp>{getTime(chapter.end)}</Timestamp>
        </div>
      ))}
    </div>
  );
}
