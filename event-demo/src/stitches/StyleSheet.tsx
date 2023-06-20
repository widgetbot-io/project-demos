import { getCssText } from "./stitches.config";

export const StyleSheet = () => {
  return (
    <>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    </>
  );
};
