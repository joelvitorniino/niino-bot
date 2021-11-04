import { Client, GroupChatId, Message } from "@open-wa/wa-automate";

class GetDescriptionCommandService {
  async execute(client: Client, message: Message) {
    const photoOfGroup = await client.getProfilePicFromServer(message.chatId);
    const photoOfGroupFromServer = (await photoOfGroup).toString();
    await client
      .getGroupInfo(<GroupChatId>message.chatId)
      .then(async (data) => {
        await client.sendImage(
          message.from,
          photoOfGroupFromServer,
          `group.png`,
          `${data.description}`
        );
      });
  };
};

export default GetDescriptionCommandService;
