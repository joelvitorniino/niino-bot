import { Client, GroupChatId, Message, ContactId } from "@open-wa/wa-automate";

export async function isAdmin(client: Client, message: Message) {
  return client
    .getGroupAdmins(<GroupChatId>message.chatId)
    .then(async (admins) => {
      if (
        admins.includes(<ContactId>`${message.author}`) ||
        message.author === "5521969693229@c.us"
      ) {
        return true;
      } else {
        return false;
      }
    });
}
