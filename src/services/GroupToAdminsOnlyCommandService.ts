import { Client, ContactId, GroupChatId, Message } from '@open-wa/wa-automate';

class GroupToAdminsOnlyCommandService {
    async execute(client: Client, message: Message) {
        client.getGroupAdmins(<GroupChatId>message.chatId).then(async admins => {
            if(admins.includes(<ContactId>`${message.author}`)) {
                await client.setGroupToAdminsOnly(<GroupChatId>message.chatId, true);
            } else {
                await client.sendText(message.from, 'Você não tem permissão para executar este comando!');
            };
        });
    };
};

export default GroupToAdminsOnlyCommandService;