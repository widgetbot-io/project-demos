import Link from "next/link";
import Image from "next/image";

const WidgetbotBadge = () => {
  return (
    <Link
      className="absolute left-0 right-0 top-6 mx-auto w-fit rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 opacity-75 transition hover:opacity-100"
      href={"https://widgetbot.io/"}
      target="_blank"
    >
      <div className="flex items-center gap-2">
        <h1 className="text-md text-center">Powered by</h1>
        <div className="flex items-center justify-center gap-x-2">
          <Image
            src="img/widgetbot.svg"
            alt="WidgetBot Logo"
            width={16}
            height={16}
          />
          <h2 className="text-lg underline">WidgetBot</h2>
        </div>
      </div>
    </Link>
  );
};
export default WidgetbotBadge;
