import { Mic, Video, Phone } from "lucide-react";
import ActionComponent from "./ActionComponent";
import ToggleChat from "./ToggleChat";

const ActionBar = () => {
  return (
    <div className="absolute bottom-4 left-0 right-0 mx-auto flex w-fit gap-1 rounded bg-neutral-900 p-1">
      <ActionComponent icon={<Mic />} />
      <ActionComponent icon={<Video />} />
      <ToggleChat />
      <ActionComponent className="bg-red-800" icon={<Phone />} />
    </div>
  );
};

export default ActionBar;
