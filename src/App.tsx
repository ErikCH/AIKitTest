import "./App.css";
import { generateClient } from "aws-amplify/api";
import { AIConversation, createAIHooks } from "@aws-amplify/ui-react-ai";
import { Schema } from "../amplify/data/resource";
import { View } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

export default function App() {
  const { useAIConversation } = createAIHooks(client);

  const [
    {
      data: { messages },
      isLoading,
    },
    sendMessage,
  ] = useAIConversation("chat");

  return (
    <View flex={1} height={"60vh"}>
      <AIConversation
        messages={messages}
        handleSendMessage={sendMessage}
        isLoading={isLoading}
      />
    </View>
  );
}
