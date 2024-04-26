import ChatWidget from "@/app/components/dashboard/chat";
import DashboardContainer from "@/app/components/dashboard/container";

const DashboardChat = async () => {
  return (
    <DashboardContainer className="w-full">
      <ChatWidget />
    </DashboardContainer>
  );
};

export default DashboardChat;
