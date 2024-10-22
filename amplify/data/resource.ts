import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a
  .schema({
    chat: a.conversation({
      aiModel: a.ai.model("Claude 3 Sonnet"),
      systemPrompt:
        "You are a helpful conversation chat model, giving advice on travel",
    }),
  })
  .authorization((allow) => [allow.authenticated()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
