import { Client, GroupChatId, Message } from '@open-wa/wa-automate';

class GetAllAdminsCommandService {
    async execute(client: Client, message: Message) {
        await client.getGroupAdmins(<GroupChatId>message.chatId)
            .then(async (admins) => {
                const array = [];
                admins.forEach((admin, i) => array[i] = `@${admin}`)
                const result = array.toString().split(",").join("\n").split("@c.us").join("");
                client.sendReplyWithMentions(message.from, result, false || null); 
            });
    };
};

export default GetAllAdminsCommandService;