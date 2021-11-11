import { Client, ContactId, GroupChatId, Message } from "@open-wa/wa-automate";

class SuperArray extends Array {
  randomMember(value) {
    return value[Math.floor(Math.random() * value.length)];
  }
}

class RouletteRussianCommandService {
  async execute(client: Client, message: Message) {
    await client
      .getGroupMembers(<GroupChatId>message.chatId)
      .then(async (members) => {
        const arrayContacts = [];
        const array = [];

        members.forEach(
          (member, i) =>
            (arrayContacts[i] = `@${member.id}`
              .split(",")
              .join("\n")
              .split("@c.us")
              .join(""))
        );
        members.forEach((member, i) => (array[i] = `${member.id}`));

        const Super = new SuperArray();
        const randomMemberBanned = Super.randomMember(array);
        const randomMember = Super.randomMember(arrayContacts);

        const banMember = async () => {
          await client.removeParticipant(
            <GroupChatId>message.chatId,
            <ContactId>randomMemberBanned
          );
        };

        const sendMessageMemberRandom = async () =>
          await client.sendTextWithMentions(
            message.from,
            `${randomMember} se salvou por pouco!`
          );
        const sendMessageMembers = async () =>
          await client.sendTextWithMentions(
            message.from,
            `${randomMember} caralho foi por pouco que você jogava no vasco!`
          );

        const arrayFunctions = [
          banMember,
          sendMessageMemberRandom,
          sendMessageMembers,
        ];
        let randomFunc;

        randomFunc =
          arrayFunctions[Math.floor(Math.random() * arrayFunctions.length)];

        client.getGroupAdmins(<GroupChatId>message.chatId)
          .then(async (admins) => {
            if(admins.includes(<ContactId>`${message.author}`)) {
              if (randomFunc === banMember) {
                banMember();
                console.log(randomMemberBanned);
              }
              if (randomFunc === sendMessageMemberRandom) {
                return sendMessageMemberRandom();
              }
      
              if (randomFunc === sendMessageMembers) {
                return sendMessageMembers();
              }      
            } else {
              await client.sendText(message.from, 'Você não tem permissão para executar este comando!');
            }
          });
      });
  }
}

export default RouletteRussianCommandService;
